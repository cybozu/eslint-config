# @cybozu/eslint-config

[![npm version](https://badge.fury.io/js/%40cybozu%2Feslint-config.svg)](https://badge.fury.io/js/%40cybozu%2Feslint-config)
[![](https://github.com/cybozu/eslint-config/workflows/test/badge.svg)](https://github.com/cybozu/eslint-config/actions?workflow=test)
[![](https://github.com/cybozu/eslint-config/workflows/lint/badge.svg)](https://github.com/cybozu/eslint-config/actions?workflow=lint)

An ESLint rule set for Cybozu.

**This package is intended to use in Cybozu. Currently, this is still in development so the rules might be changed.**

## What is this?

This is an ESLint rule set for Cybozu.
The purpose of `@cybozu/eslint-config` are the following

- Share best practices for JavaScript
- Standardize JavaScript coding guideline in Cybozu
- Installation support for ESLint and continuous support for the rule set

## The benefits to adopt this rule

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
1.  We update patch version if the changes don't cause any new errors and warnings.

## How to use

Install `eslint` and `@cybozu/eslint-config`

```
% npm install --save-dev eslint @cybozu/eslint-config
```

### `eslint.config.mjs`

Put it into your `eslint.config.mjs`

```js
import reactTypeScriptPrettier from "@cybozu/eslint-config/presets/react-typescript-prettier";

export default [
  ...reactTypeScriptPrettier,
  // You can add other presets as needed.
  // ...otherPresets
  {
    rules: {
      // You can also override individual rules.
    },
  },
];
```

> **Note:** Currently, we adopt that `@stylistic/indent` rule is 2 spaces and having indentation in `switch case`.
> You can override the rule if your project adopts 4 spaces or others.
> We think it's important to have consistency in your entire codebase.

## Upgrading from v25 or earlier

Starting from v26, `@cybozu/eslint-config` only supports [Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files) (`eslint.config.mjs`) and has dropped support for the legacy config format (`.eslintrc.js`).

If you are using v25 or earlier, you need to:

- Migrate your ESLint configuration from `.eslintrc.js` to `eslint.config.mjs`
- Update all config imports from `@cybozu/eslint-config/flat/presets/*` to `@cybozu/eslint-config/presets/*`
- Update import from `@cybozu/eslint-config/flat/globals/kintone` to `@cybozu/eslint-config/globals/kintone`

See the [ESLint migration guide](https://eslint.org/docs/latest/use/configure/migration-guide) for details on migrating to Flat Config.

### ESLint version requirement

This version requires ESLint **v10 or later**. ESLint v8 and v9 are no longer supported as peer dependencies. Upgrade ESLint before updating this package.

### React rule changes

React lint rules are now provided directly by `@cybozu/eslint-config` instead of `eslint-plugin-react`. Note the following breaking changes:

- **Class component rules removed**: Rules specific to class components (`react/no-deprecated`, `react/prefer-stateless-function`, etc.) are no longer enabled. If your project uses class components, you may need to configure additional rules manually.
- **`jsx-a11y` plugin replaced**: Accessibility rules now use `eslint-plugin-jsx-a11y-x` instead of `eslint-plugin-jsx-a11y`, and the rule prefix has changed from `jsx-a11y/*` to `jsx-a11y-x/*`. If you override any `jsx-a11y/*` rules in your config or reference them in `eslint-disable` comments, update them to the `jsx-a11y-x/*` prefix.
- **JSX formatting rules moved to `@stylistic`**: The following rules are still enabled but renamed. Update your overrides and `eslint-disable` comments accordingly:
  - `react/self-closing-comp` → `@stylistic/jsx-self-closing-comp`
  - `react/jsx-curly-brace-presence` → `@stylistic/jsx-curly-brace-presence`
  - `react/jsx-pascal-case` → `@stylistic/jsx-pascal-case`
  - `react/jsx-first-prop-new-line` → `@stylistic/jsx-first-prop-new-line`
  - `react/jsx-max-props-per-line` → `@stylistic/jsx-max-props-per-line`
  - `jsx-quotes` → `@stylistic/jsx-quotes`
- **JSX formatting rules removed**: `react/jsx-closing-bracket-location`, `react/jsx-closing-tag-location`, `react/jsx-curly-spacing`, `react/jsx-equals-spacing`, `react/jsx-indent`, `react/jsx-indent-props`, `react/jsx-props-no-multi-spaces`, `react/jsx-tag-spacing` and `react/jsx-wrap-multilines` are no longer enabled. Equivalent rules are available in [`@stylistic/eslint-plugin`](https://eslint.style/) if you need them.
- **`react/display-name` and `react/jsx-no-comment-textnodes` removed**: These rules (previously enabled via the `eslint-plugin-react` recommended config) are no longer enabled.
- **`react/no-multi-comp` removed**: With the previously configured `ignoreStateless: true` option, this rule only counted class components, which are no longer supported. It has no effect in a function-component codebase, so it is no longer enabled.
- **Classic JSX Transform no longer supported**: The `react/jsx-uses-react` rule is not available anymore. Projects must use the [New JSX Transform](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).

### TypeScript rule changes

The following rules were previously disabled explicitly but are now enabled as **error** via the `typescript-eslint` recommended/stylistic configs:

- [`@typescript-eslint/no-explicit-any`](https://typescript-eslint.io/rules/no-explicit-any/)
- [`@typescript-eslint/no-duplicate-enum-values`](https://typescript-eslint.io/rules/no-duplicate-enum-values/)
- [`@typescript-eslint/no-unsafe-declaration-merging`](https://typescript-eslint.io/rules/no-unsafe-declaration-merging/)
- [`@typescript-eslint/prefer-namespace-keyword`](https://typescript-eslint.io/rules/prefer-namespace-keyword/)
- [`@typescript-eslint/consistent-type-assertions`](https://typescript-eslint.io/rules/consistent-type-assertions/)
- [`@typescript-eslint/prefer-function-type`](https://typescript-eslint.io/rules/prefer-function-type/)
- [`@typescript-eslint/ban-tslint-comment`](https://typescript-eslint.io/rules/ban-tslint-comment/)
- [`@typescript-eslint/no-confusing-non-null-assertion`](https://typescript-eslint.io/rules/no-confusing-non-null-assertion/)

If these are too strict for your project, turn them off in your own config.

### Other rule changes

- **Core formatting rules moved to `@stylistic`**: Deprecated ESLint core formatting rules (e.g. `indent`, `quotes`, `semi`, `max-len`) are now enabled under the `@stylistic/*` prefix via [`@stylistic/eslint-plugin`](https://eslint.style/). If you override these rules in your config or reference them in `eslint-disable` comments, update them to the `@stylistic/*` prefix (e.g. `indent` → `@stylistic/indent`).
- **`no-return-await` removed**: This rule is no longer enabled. If your codebase relies on it, consider using [`@typescript-eslint/return-await`](https://typescript-eslint.io/rules/return-await/) in TypeScript projects.

### `.eslintrc.js` (v25 and earlier)

> **Note:** This format is no longer supported in v26 and later. Use `eslint.config.mjs` instead.

```js
module.exports = {
  extends: "@cybozu",
};
```

```js
module.exports = {
  extends: "@cybozu/eslint-config/presets/react-typescript-prettier",
  rules: {
    // default
    // 'indent': ['warn', 2, { "SwitchCase": 1 }],
    indent: ["warn", 4, { SwitchCase: 0 }],
  },
};
```

## Support rule set

- `@cybozu/eslint-config/presets/base`
  - This is included in the all following presets
- `@cybozu/eslint-config/presets/node`
  - Including `eslint-plugin-n`
- `@cybozu/eslint-config/presets/typescript`
  - Including `@typescript-eslint/eslint-plugin`
- `@cybozu/eslint-config/presets/react`
  - Including built-in React rules, `eslint-plugin-react-hooks` and `eslint-plugin-jsx-a11y-x`
  - `eslint-plugin-react` is no longer required as a dependency
- `@cybozu/eslint-config/presets/react-typescript`
  - Including `@cybozu/eslint-config/presets/typescript` and `@cybozu/eslint-config/presets/react`
- `@cybozu/eslint-config/presets/es5`
- `@cybozu/eslint-config/presets/css-baseline`
  - CSS baseline rules using `@eslint/css`

## Prettier Support

Prettier is a code formatter, which supports not only JavaScript but also many languages.
Prettier is widely used as a code formatter for JavaScript.

It's opinionated but we don't have to discuss about code styles with Prettier because it's the rule (No more bikeshed).

The following presets disable all rules that conflict with Prettier and treat the differences between Prettier's code format as errors.
You can fix the errors by `--fix` option so you don't have to fix the errors manually.

To use the presets, you have to install `prettier`. We only support Prettier v3 or later versions.

```
% npm install --save-dev prettier
```

- `@cybozu/eslint-config/presets/prettier`
- `@cybozu/eslint-config/presets/node-prettier`
- `@cybozu/eslint-config/presets/node-typescript-prettier`
- `@cybozu/eslint-config/presets/typescript-prettier`
- `@cybozu/eslint-config/presets/react-typescript-prettier`
- `@cybozu/eslint-config/presets/react-prettier`
- `@cybozu/eslint-config/presets/es5-prettier`

**Currently, we don't support customized Prettier config**

## For kintone customize developers

We also provide presets for kintone customize/plug-in developers, which include some `globals` for kintone.

### Usage

```js
// eslint.config.mjs
import kintoneCustomize from "@cybozu/eslint-config/presets/kintone-customize";

export default [...kintoneCustomize];
```

### Presets

- `@cybozu/eslint-config/presets/kintone-customize`
  - Preset for kintone customize/plug-in development
- `@cybozu/eslint-config/presets/kintone-customize-prettier`
  - Preset for kintone customize/plug-in development including `prettier` config
- `@cybozu/eslint-config/presets/kintone-customize-es5`
  - Preset for kintone customize/plug-in development in ES5
- `@cybozu/eslint-config/presets/kintone-customize-es5-prettier`
  - Preset for kintone customize/plug-in development in ES5 including `prettier` config
