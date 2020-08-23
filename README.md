# @cybozu/eslint-config

[![npm version](https://badge.fury.io/js/%40cybozu%2Feslint-config.svg)](https://badge.fury.io/js/%40cybozu%2Feslint-config)
[![](https://github.com/cybozu/eslint-config/workflows/test/badge.svg)](https://github.com/cybozu/eslint-config/actions?workflow=test)
[![](https://github.com/cybozu/eslint-config/workflows/lint/badge.svg)](https://github.com/cybozu/eslint-config/actions?workflow=lint)

A ESLint rule set for Cybozu.

**This package is intended to use in Cybozu. Currently, this is still in development so the rules might be changed.**

## What is this?

This is a ESLint rule set for Cybozu.
The purpose of `@cybozu/eslint-config` are following

- Share best practices for JavaScript
- Standardize JavaScript coding guideline in Cybozu
- Installation support for ESLint and continuous support for the rule set

## The benefits to adapt this rule

You don't need to care about updates for ESLint and ESLint plugins.
We'll manage the updates and provide CHANGELOG that you need to know so that you can update it easily.
In addition, we'll add some useful plugins into `@cybozu/eslint-config` so you can learn about best practices for JavaScript through `@cybozu/eslint-config`.

## Rule set policies

We provide rules that are Error or Warning.

### Error

This is a rule you must fix because the code might not follow our practices in JavaScript

### Warning

This is a rule you should fix because the code style might not be preferable.

## Version policy

1.  We update major version if the changes might cause new errors.
1.  We update minor version if the changes might cause new warnings.
1.  We update patch version if the changes don't cause any new errors and warings.

## How to use

Install `eslint` and `@cybozu/eslint-config` and put it into your `.eslintrc.js`

```
% npm install --save-dev eslint @cybozu/eslint-config
```

- `.eslintrc.js`

```js
module.exports = {
  extends: "@cybozu"
};
```

**Currently, we adopt that `indent` rule is 2 spaces and having indentation in `switch case`.
You can override the rule if your project adopts 4 spaces or others.
We think it's important to have consistency in your entire codebase.**

```js
module.exports = {
  extends: "@cybozu",
  rules: {
    // default
    // 'indent': ['warn', 2, { "SwitchCase": 1 }],
    indent: ["warn", 4, { SwitchCase: 0 }]
  }
};
```

## Support rule set

- `@cybozu`
  - This is included in the all following presets
- `@cybozu/eslint-config/presets/node`
  - Including `eslint-plugin-node`
- `@cybozu/eslint-config/presets/typescript`
  - Including `@typescript-eslint/eslint-plugin`
- `@cybozu/eslint-config/presets/react`
  - Including `eslint-plugin-react`, `eslint-plugin-jsx-ally` and `eslint-plugin-react-hooks`
  - ⚠️ A11y rules are being defined as warnings, which is an experimental so we might change the rules in later
- `@cybozu/eslint-config/presets/react-typescript`
  - Including `@cybozu/eslint-config/presets/typescript` and `@cybozu/eslint-config/presets/react`
- `@cybozu/eslint-config/presets/flowtype`
  - Including `eslint-plugin-flowtype`
- `@cybozu/eslint-config/presets/react-flowtype`
  - Including `@cybozu/eslint-config/presets/react` and `eslint-plugin-flowtype`
- `@cybozu/eslint-config/presets/es5`

## Prettier Support

Prettier is a code formatter, which supports not only JavaScript but also other languages.
Prettier is used widely for a code formatter for JavaScript.

It's an opinionated tool but with Prettier, we don't have to discuss code styles in code review.
(No more bikeshed)

The presets disable all rules conflicting with Prettier and treat the difference as errors.
You can fix the errors by `--fix` option so you don't have to fix the errors manually.

In order to this, you have to install `prettier` and choose a preset from the followings.

```
% npm install --save-dev prettier
```

- `@cybozu/eslint-config/presets/prettier`
- `@cybozu/eslint-config/presets/node-prettier`
- `@cybozu/eslint-config/presets/node-typescript-prettier`
- `@cybozu/eslint-config/presets/typescript-prettier`
- `@cybozu/eslint-config/presets/react-typescript-prettier`
- `@cybozu/eslint-config/presets/react-prettier`
- `@cybozu/eslint-config/presets/react-flowtype-prettier`
- `@cybozu/eslint-config/presets/es5-prettier`

**Currently, we don't support customized Prettier config**

## For kintone customize developers

`@cybozu/eslint-config/preset/kintone-customize-es5` is a preset for kintone customize(plug-in) developers, which is based on `preset/es5` and add some `globals` for kintone.

```js
module.exports = {
  extends: "@cybozu/eslint-config/presets/kintone-customize-es5"
};
```

We also provide `@cybozu/eslint-config/presets/kintone-customize-es5-prettier` to use it with `prettier`.
