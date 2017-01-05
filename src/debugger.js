'use strict';

import defaultColors from './defaultColors';
import defaultOptions from './defaultOptions';

class Debugger {

	/**
	 * Debugger constructor
	 * @param {String} style [Debugging style to use: border / background.]
	 * @param {Integer} borderWidth [Specifies the borderWidth.]
	 * @param {Object} colors [Object containing the colors used to debug.]
	 */
	constructor({style = defaultOptions.styles.border, borderWidth = defaultOptions.borderWidth, colors = defaultColors}) {
		this._style = style;
		this._borderWidth = borderWidth;
		this._colors = colors;
	}

	/**
	 * Method that picks a random color from the colors Object.
	 * @return {String}
	 */
	_getRandomColor() {
		const colorsKeys = Object.keys(this._colors);
		const randomColorKey = colorsKeys[Math.floor(Math.random() * colorsKeys.length)];
		return this._colors[randomColorKey];
	}

	/**
	 * Method that returns a color Hex value by his name if specified, if not picks a random color from the list.
	 * @param {String} colorName [Represents a color name from the list.]
	 */
	_getColor(colorName) {
		return this._colors[colorName] || this._getRandomColor();
	}

	/**
	 * Returns an object with the StyleSheet properties to use in an element.
	 * @return {Object}
	 */
	_debugWithBorders(color) {
		return {
			borderColor: color,
			borderWidth: this._borderWidth
		};
	}

	/**
	 * Returns an object with the StyleSheet properties to use in an element.
	 * @return {Object}
	 */
	_debugWithBackgrounds(color) {
		return {
			backgroundColor: color
		};
	}

	/**
	 * Sets the debug depending on the style and calls _debugWithBorders / _debugWithBackgrounds.
	 * @param {String} colorName [Represents a specified color to use when debugging an element.]
	 * @return {Object}
	 */
	debug(colorName) {
		const color = this._getColor(colorName);
		return (this._style === defaultOptions.styles.background) ? this._debugWithBackgrounds(color) : this._debugWithBorders(color);
	}
}

export default Debugger;
