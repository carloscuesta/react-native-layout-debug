'use strict';

import Debugger from '../src/debugger';
import should from 'should';
import defaultColors from '../src/defaultColors';

const debug = new Debugger({
	mode: 'border',
	borderWidth: 4
});

describe('react-native-layout-debug', () => {
	describe('debugWithBorders', () => {
		describe('when using the following object {color: #FF5252, borderWidth: 4}', () => {
			it('should have a key borderColor with #FF5252 as a value.', () => {
				debug._debugWithBorders('#FF5252').should.have.value('borderColor', '#FF5252');
			});

			it('should have a key borderWidth with 4 as a value.', () => {
				debug._debugWithBorders('#FF5252').should.have.value('borderWidth', 4);
			});
		});

		describe('when using the following object {color: #C6FF00, borderWidth: 4}', () => {
			it('should not have a key borderColor with #FF5252 as a value.', () => {
				debug._debugWithBorders('#C6FF00').should.not.have.value('borderColor', '#FF5252');
			});

			it('should not have a key borderWidth with 2 as a value.', () => {
				debug._debugWithBorders('#FF5252').should.not.have.value('borderWidth', 2);
			});
		});
	});

	describe('debugWithBackgrounds', () => {
		describe('when using the following object {color: #FF5252}', () => {
			it('should have a key backgroundColor with #FF5252 as a value.', () => {
				debug._debugWithBackgrounds('#FF5252').should.have.value('backgroundColor', '#FF5252');
			});
		});

		describe('when using the following object {color: #C6FF00, borderWidth: 4}', () => {
			it('should not have a key backgroundColor with #FF5252 as a value.', () => {
				debug._debugWithBackgrounds('#FF5252').should.not.have.value('backgroundColor', '#C6FF00');
			});
		});
	});

	describe('getColor', () => {
		describe('when asking for the default colors by the name', () => {
			Object.keys(defaultColors).map((color, key) => {
				let hexValue = debug._getColor(color);
				it(`the default ${color} color should return ${hexValue}.`, () => {
					debug._getColor(color).should.equal(hexValue);
				});
			});
		});
	});
});
