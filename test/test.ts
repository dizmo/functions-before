/* tslint:disable:ban-types */
import { expect } from "chai";
import { before } from "../lib";

import "mocha";

describe("before", () => {
    it("should exist", () => {
        expect(before).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(before).to.be.a("function");
    });
});

describe("before", () => {
    it("should be invoked beforehand", () => {
        const f1 = (...args: any[]) => {
            expect(args.length).to.eq(0);
        };
        const f2 = before(f1, (fn: Function) => {
            expect(fn).to.not.be.an("undefined");
        });
        expect(f2()).to.eq(undefined);
    });
    it("should receive arguments", () => {
        const f1 = (value: boolean) => {
            expect(value).to.eq(true);
        };
        const f2 = before(f1, (fn: Function, value: boolean) => {
            expect(fn).to.not.be.an("undefined");
            expect(value).to.eq(true);
        });
        expect(f2(true)).to.eq(undefined);
    });
    it("should block invocations", () => {
        const f1 = () => {
            throw new Error("should not be thrown");
        };
        const f2 = before(f1, (): boolean => {
            return false; // block!
        });
        expect(f2()).to.eq(undefined);
    });
});
