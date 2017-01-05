'use strict';

import defaultColors from './defaultColors';
import defaultOptions from './defaultOptions';

class Debugger {

	constructor({style = defaultOptions.styles.border, borderWidth = defaultOptions.borderWidth, colors = defaultColors}) {
		this._style = style;
		this._borderWidth = borderWidth;
		this._colors = colors;
	}

	_getRandomColor() {
		const colorsKeys = Object.keys(this._colors);
		const randomColorKey = colorsKeys[Math.floor(Math.random() * colorsKeys.length)];
		return this._colors[randomColorKey];
	}

	_getColor(colorName) {
		return this._colors[colorName] || this._getRandomColor();
	}

	_debugWithBorders(color) {
		return {
			borderColor: color,
			borderWidth: this._borderWidth
		};
	}

	_debugWithBackgrounds(color) {
		return {
			backgroundColor: color
		};
	}

	debug(colorName) {
		const color = this._getColor(colorName);
		return (this._style === defaultOptions.styles.background) ? this._debugWithBackgrounds(color) : this._debugWithBorders(color);
	}
}

export default Debugger;
