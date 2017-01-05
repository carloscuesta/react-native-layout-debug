import Debugger from './src/debugger';

/**
 * Debugger decorator
 * @param  {Object} target
 * @param  {String} name
 * @param  {Function} descriptor
 * @return {Object}
 */
function debuggerDecorator(target, name, descriptor) {
	const layoutDebug = this;
	const oldFunction = descriptor.value;

	descriptor.value = function () {
		return oldFunction.bind(this)(layoutDebug);
	};

	return descriptor;
}

/**
 * Wrapper for debugger decorator to allow custom params
 * @return {Function}
 */
function getDebugger() {
	const isCustom = arguments.length === 1;
	const debuggerParams = isCustom ? arguments[0] : {};
	const layoutDebug = new Debugger(debuggerParams);
	return (isCustom) ? debuggerDecorator.bind(layoutDebug) : debuggerDecorator.call(layoutDebug, ...arguments);
}

export default getDebugger;
