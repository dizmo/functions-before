[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-before.svg)](https://npmjs.org/package/@dizmo/functions-before)
[![Build Status](https://travis-ci.com/dizmo/functions-before.svg?branch=master)](https://travis-ci.com/dizmo/functions-before)
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
const { before } = require("@dizmo/functions-before");
```

### Examples

```typescript
import { before } from "@dizmo/functions-before";
```

```typescript
const f1 = (value: number): number => {
    return value;
};
const f2 = before(f1, (
    fn: Function, value: number
): boolean|undefined => {
    const expect = value === 0 || value === 1;
});
const expect0 = f2(0) === 0;
const expect1 = f2(1) === 1;
```

```typescript
class Class {
    @before.decorator((
        fn: Function, value: number
    ): boolean|undefined => {
        return false; // blocks method invocation!
    })
    public method(value: number): number {
        return value;
    }
}
const expect0 = new Class().method(0) === undefined;
const expect1 = new Class().method(1) === undefined;
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

```sh
npm run -- lint --fix
```

### Test

```sh
npm run test
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Documentation

```sh
npm run docs
```

## Publish

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2020 [dizmo AG](http://dizmo.com/), Switzerland
