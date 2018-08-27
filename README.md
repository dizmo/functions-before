[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-before.svg)](https://npmjs.org/package/@dizmo/functions-before)
[![Build Status](https://travis-ci.org/dizmo/functions-before.svg?branch=master)](https://travis-ci.org/dizmo/functions-before)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-before/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-before?branch=master)

# @dizmo/functions-before
Returns a function decorating an original function with a callback, which will be invoked before the execution of the original function. The callback can block the invocation of the original function by returning `false`.

## Usage
### Install
```sh
npm install @dizmo/functions-before --save
```
### Require
```javascript
let lib = require("@dizmo/functions-before");
```
### Examples
```typescript
import { before } from "@dizmo/functions-before";
```
```typescript
const f1 = (value: number): number => {
    return value;
};
const f2 = before(f1, (fn: Function, value: number): boolean|undefined => {
    const expect = value === 0 || value === 1;
});
const expect = f2(0) === 0;
const expect = f2(1) === 1;
```
```typescript
class Class {
    @before.decorator((fn: Function, value: number): boolean|undefined => {
        return false; // blocks method invocation!
    })
    public method(value: number): number {
        return value;
    }
}
const expect = new Class().method(0) === undefined;
const expect = new Class().method(1) === undefined;
```
## Development
### Build
```sh
npm run build
```
#### without linting:
```sh
npm run -- build --no-lint
```
### Lint
```sh
npm run lint
```
#### with auto-fixing (for JavaScript and TypeScript):
```sh
npm run -- lint --fix
```
### Test
```sh
npm run test
```
#### without (re-)building:
```sh
npm run -- test --no-build
```
### Cover
```sh
npm run cover
```
#### without (re-)building:
```sh
npm run -- cover --no-build
```

## Copyright

 © 2018 [dizmo AG](http://dizmo.com/), Switzerland
