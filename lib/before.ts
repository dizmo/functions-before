/**
 * Returns a method decorator taking a callback, which will be invoked
 * before the execution of the decorated function, *unless* the callback
 * returns `false`.
 *
 * @param fn a function to be decorated
 * @param callback a handler to be invoked beforehand
 */
export function before(
    fn: Function, callback: Function
): Function {
    return function(
        this: any, ...args: any[]
    ) {
        if (callback.apply(
            this, [fn.bind(this)].concat(args)) !== false
        ) {
            return fn.apply(this, args);
        }
    };
}
export default before;
