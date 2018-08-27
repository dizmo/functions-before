"use strict";
/* tslint:disable:ban-types trailing-comma */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a method decorator taking a callback, which will be invoked
 * before the execution of the decorated function, *unless* the callback
 * returns `false`.
 *
 * @param fn a function to be decorated
 * @param callback a handler to be invoked beforehand
 */
function before(fn, callback) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (callback.apply(this, [fn.bind(this)].concat(args)) !== false) {
            return fn.apply(this, args);
        }
    };
}
exports.before = before;
exports.default = before;
//# sourceMappingURL=before.js.map