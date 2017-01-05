'use strict';

import Debugger from './src/debugger';

const layoutDebug = new Debugger({
	// Should be passed via args
	mode: 'border',
	borderWidth: 3
});

function injectDebugger(target, name, descriptor) {
	const oldFunction = descriptor.value;

	descriptor.value = function () {
		return oldFunction.bind(this)(layoutDebug);
	};

	return descriptor;
}

export default injectDebugger;
