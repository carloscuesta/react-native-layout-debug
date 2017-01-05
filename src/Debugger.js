'use strict';

class Debugger {
    constructor({mode = 'border', borderWidth = 3, colors = {black: '#252525', red: '#FF5252', green: '#00E676', lime: '#C6FF00', yellow: '#FFEA00', orange: '#FF5722', blue: '#448AFF', pink: '#FF4081', purple: '#E040FB', cyan: '#18FFFF', white: '#FFFFFF'}}) {
        this._mode = mode;
        this._borderWidth = borderWidth;
        this._colors = colors;
    }

    _getRandomColor(){
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
        }
    }

    _debugWithBackgrounds(color) {
        return {
            backgroundColor: color
        }
    }

    debug(colorName) {
        const color = this._getColor(colorName);
        return (this._mode === 'background') ? this._debugWithBackgrounds(color) : this._debugWithBorders(color);
    }
}

module.exports = Debugger;
