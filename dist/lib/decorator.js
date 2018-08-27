"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:ban-types */
var before_1 = require("./before");
/**
 * Returns a method decorator taking a callback, which will be invoked
 * before the execution of the decorated function, *unless* the callback
 * returns `false`.
 *
 * @param callback a handler to be invoked beforehand
 */
function decorator(callback) {
    return _decorator(callback);
}
exports.decorator = decorator;
function _decorator(callback) {
    return function (tgt, key, tpd) {
        if (tpd) {
            tpd.value = before_1.before(tpd.value, callback);
            return tpd;
        } else {
            tgt[key] = before_1.before(tgt[key], callback);
        }
    };
}
exports.default = decorator;
//# sourceMappingURL=decorator.js.map