# react-native-layout-debug

[![Travis](https://img.shields.io/travis/carloscuesta/react-native-layout-debug.svg?style=flat-square)](https://travis-ci.org/carloscuesta/react-native-layout-debug)
[![npm version](https://img.shields.io/npm/v/react-native-layout-debug.svg?style=flat-square)](https://www.npmjs.com/package/react-native-layout-debug)
[![npm-downloads](https://img.shields.io/npm/dt/react-native-layout-debug.svg?style=flat-square)](https://www.npmjs.com/package/react-native-layout-debug)
[![Code Climate](https://img.shields.io/codeclimate/github/carloscuesta/react-native-layout-debug.svg?style=flat-square)](https://codeclimate.com/github/carloscuesta/react-native-layout-debug)

> React native layout debugger.

## Install

```bash
$ npm i --save react-native-layout-debug
```

## Usage

Install and import the module inside your code.

```javascript
import reactNativeLayoutDebug from 'react-native-layout-debug';
```

There are two ways to use **react-native-layout-debug** using it with a **decorator** or **directly**.

To debug a layout component, you should call the `debug(color)` method inside the prop `style={}`.

The **debug(color)** accepts a color to use as a border or background. If not provided will pick a random color from the list, normally you should specify a color by the name from the list, Eg: `debug('red')`. See the [defaultColors](https://github.com/carloscuesta/react-native-layout-debug/blob/master/src/defaultColors.js).

If you don't like the default colors, you can provide an object of colors to the Debugger, see the [customization section](https://github.com/carloscuesta/react-native-layout-debug#customization).

### Usage with decorator

```javascript
class HelloWorld extends Component {
	// Using the default config {style: 'border', borderWidth: 3, colors: defaultColors}.
	@reactNativeDebug
	render(debug) {
		return (
			<View style={[debug('red')]}>
				<Text>Hey!</Text>
			</View>
		);
	}

	// Using a custom object of colors and backgrounds {style: 'background', colors: colorListObject}
	@reactNativeDebug({style: 'background', colors: colorListObject})
	render(debug) {
		return (
			<View style={[debug('red')]}>
				<Text>Hey!</Text>
			</View>
		);
	}
}
```

### Usage without decorator

```javascript

const debug = reactNativeDebug({});

class HelloWorld extends Component {
	render() {
		return (
			<View style={debug('red')}>

			</View>
		);
	}
}
```

## Customization

The debugger could be customized with these three properties: `style`, `colors` and `borderWidth`.

#### `style`

Specifies the style to use when debugging the layout, accepts two values:

- `border`: **Default option**, uses borders to debug the layout elements.
- `background`: Uses background to debug the layout elements.

#### `colors`

An **object of colors** that will be used by the debug. Look at [`defaultColors.js`](https://github.com/carloscuesta/react-native-layout-debug/blob/master/src/defaultColors.js) to see the default colors and the object used.

#### `borderWidth`

The **borderWidth** unit to use as a border, by default set to `3`.
