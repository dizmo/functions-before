"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* tslint:disable:ban-types max-classes-per-file */

var chai_1 = require("chai");

var lib_1 = require("../lib");

require("mocha");

describe("before.decorator", function () {
  it("should exist", function () {
    chai_1.expect(lib_1.before.decorator).to.not.be.an("undefined");
  });
  it("should be a function", function () {
    chai_1.expect(lib_1.before.decorator).to.be.a("function");
  });
});
describe("before.decorator", function () {
  it("should be invoked beforehand", function () {
    var Class =
    /*#__PURE__*/
    function () {
      function Class() {
        _classCallCheck(this, Class);
      }

      _createClass(Class, [{
        key: "method",
        value: function method() {
          chai_1.expect(arguments.length).to.eq(0);
        }
      }]);

      return Class;
    }();

    __decorate([lib_1.before.decorator(function (fn) {
      chai_1.expect(fn).to.not.be.an("undefined");
    }), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], Class.prototype, "method", null);

    chai_1.expect(new Class().method()).to.eq(undefined);
  });
  it("should receive arguments", function () {
    var Class =
    /*#__PURE__*/
    function () {
      function Class() {
        _classCallCheck(this, Class);
      }

      _createClass(Class, [{
        key: "method",
        value: function method(value) {
          chai_1.expect(value).to.eq(true);
        }
      }]);

      return Class;
    }();

    __decorate([lib_1.before.decorator(function (fn, value) {
      chai_1.expect(fn).to.not.be.an("undefined");
      chai_1.expect(value).to.eq(true);
    }), __metadata("design:type", Function), __metadata("design:paramtypes", [Boolean]), __metadata("design:returntype", void 0)], Class.prototype, "method", null);

    chai_1.expect(new Class().method(true)).to.eq(undefined);
  });
  it("should block invocations", function () {
    var Class =
    /*#__PURE__*/
    function () {
      function Class() {
        _classCallCheck(this, Class);
      }

      _createClass(Class, [{
        key: "method",
        value: function method() {
          throw new Error("should not be thrown");
        }
      }]);

      return Class;
    }();

    __decorate([lib_1.before.decorator(function () {
      return false; // block!
    }), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], Class.prototype, "method", null);

    chai_1.expect(new Class().method(true)).to.eq(undefined);
  });
});
//# sourceMappingURL=test_decorator.js.map