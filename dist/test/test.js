"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:ban-types */
var chai_1 = require("chai");
var lib_1 = require("../lib");
require("mocha");
describe("before", function () {
    it("should exist", function () {
        chai_1.expect(lib_1.before).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_1.before).to.be.a("function");
    });
});
describe("before", function () {
    it("should be invoked beforehand", function () {
        var f1 = function f1() {
            chai_1.expect(arguments.length).to.eq(0);
        };
        var f2 = lib_1.before(f1, function (fn) {
            chai_1.expect(fn).to.not.be.an("undefined");
        });
        chai_1.expect(f2()).to.eq(undefined);
    });
    it("should receive arguments", function () {
        var f1 = function f1(value) {
            chai_1.expect(value).to.eq(true);
        };
        var f2 = lib_1.before(f1, function (fn, value) {
            chai_1.expect(fn).to.not.be.an("undefined");
            chai_1.expect(value).to.eq(true);
        });
        chai_1.expect(f2(true)).to.eq(undefined);
    });
    it("should block invocations", function () {
        var f1 = function f1() {
            throw new Error("should not be thrown");
        };
        var f2 = lib_1.before(f1, function () {
            return false; // block!
        });
        chai_1.expect(f2()).to.eq(undefined);
    });
});
//# sourceMappingURL=test.js.map