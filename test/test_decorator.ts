/* tslint:disable:ban-types max-classes-per-file */
import { expect } from "chai";
import { before } from "../lib";

import "mocha";

describe("before.decorator", () => {
    it("should exist", () => {
        expect(before.decorator).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(before.decorator).to.be.a("function");
    });
});

describe("before.decorator", () => {
    it("should be invoked beforehand", () => {
        class Class {
            @before.decorator((fn: Function) => {
                expect(fn).to.not.be.an("undefined");
            })
            public method(...args: any[]) {
                expect(args.length).to.eq(0);
            }
        }
        expect(new Class().method()).to.eq(undefined);
    });
    it("should receive arguments", () => {
        class Class {
            @before.decorator((fn: Function, value: boolean) => {
                expect(fn).to.not.be.an("undefined");
                expect(value).to.eq(true);
            })
            public method(value: boolean) {
                expect(value).to.eq(true);
            }
        }
        expect(new Class().method(true)).to.eq(undefined);
    });
    it("should block invocations", () => {
        class Class {
            @before.decorator((): boolean => {
                return false; // block!
            })
            public method(...args: any[]) {
                throw new Error("should not be thrown");
            }
        }
        expect(new Class().method(true)).to.eq(undefined);
    });
});
