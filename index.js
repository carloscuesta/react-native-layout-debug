'use strict';

import Debugger from './src/Debugger';

const layoutDebug = new Debugger({
    // Should be passed via args
    mode: 'border',
    borderWidth: 3
});

function injectDebugger(target, name, descriptor) {
    const oldFunction = descriptor.value;

    descriptor.value = function debugInjectorFunction() {
        return oldFunction.bind(this)(layoutDebug);
    };

    return descriptor;
}

export default injectDebugger;
