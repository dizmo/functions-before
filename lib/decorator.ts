import { before } from "./before";

/**
 * Returns a method decorator taking a callback, which will be invoked
 * before the execution of the decorated function, *unless* the callback
 * returns `false`.
 *
 * @param callback a handler to be invoked beforehand
 */
export function decorator(callback: Function): MethodDecorator {
    return _decorator(callback);
}
function _decorator(callback: Function): MethodDecorator {
    return (
        tgt: any, key: string|symbol, tpd?: PropertyDescriptor,
    ): PropertyDescriptor|void => {
        if (tpd) {
            tpd.value = before(tpd.value, callback);
            return tpd;
        } else {
            tgt[key] = before(tgt[key], callback);
        }
    };
}
export default decorator;
