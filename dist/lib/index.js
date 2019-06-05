"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* tslint:disable:ban-types callable-types */

var before_1 = require("./before");

var decorator_1 = require("./decorator");

exports.before = function () {
  before_1.before.decorator = decorator_1.decorator;
  return before_1.before;
}();

exports["default"] = exports.before;
//# sourceMappingURL=index.js.map