'use strict';

import defaultColors from './defaultColors';

class Debugger {
	constructor({mode = 'border', borderWidth = 3, colors = defaultColors}) {
		this._mode = mode;
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
		return (this._mode === 'background') ? this._debugWithBackgrounds(color) : this._debugWithBorders(color);
	}
}

module.exports = Debugger;
