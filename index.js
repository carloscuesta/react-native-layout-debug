import Debugger from './src/debugger';

const defaultDebugger = new Debugger({});

/**
 * Debugger decorator
 * @param  {Object} target
 * @param  {String} name
 * @param  {Function} descriptor
 * @return {Object}
 */
function debuggerDecorator(target, name, descriptor) {
	const layoutDebug = this;
	if(!descriptor) return layoutDebug.debug.bind(layoutDebug);

	const oldFunction = descriptor.value;

	descriptor.value = function () {
		return oldFunction.bind(this)(layoutDebug.debug.bind(layoutDebug));
	};

	return descriptor;
}

/**
 * Wrapper for debugger decorator to allow custom params
 * @return {Function}
 */
function getDebugger() {
	const isCustom = arguments.length === 1;
	const layoutDebug = isCustom ? new Debugger(arguments[0]) : defaultDebugger;
	return isCustom ? debuggerDecorator.bind(layoutDebug) : debuggerDecorator.call(layoutDebug, ...arguments);
}

export default getDebugger;
