/**
 * Returns a method decorator taking a callback, which will be invoked
 * before the execution of the decorated function, *unless* the callback
 * returns `false`.
 *
 * @param fn a function to be decorated
 * @param callback a handler to be invoked beforehand
 */
export declare function before(fn: Function, callback: Function): (this: any, ...args: any[]) => any;
export default before;
//# sourceMappingURL=before.d.ts.map