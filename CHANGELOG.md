# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
## [2.0.0](https://github.com/cybozu/eslint-config/compare/v1.1.0...v2.0.0) (2018-07-05)

### Chores

* **deps:** update eslint to v5 ([#13](https://github.com/cybozu/eslint-config/issues/13)) ([bd3402f](https://github.com/cybozu/eslint-config/commit/bd3402f))

### BREAKING CHANGES

* **deps:** use ESLint v5 as the peerDependencies

### Changes for rules


`getter-return` rule is included in `eslint:recommended`, so I remove the setting in `base.js`.
It affects the setting for `getter-return`.
Previously, `getter-return` accepted an implicit return like this.

```js
get name() {
    return;
}
```

But this is no longer allowed. You should return undefined explicitly.

```js
get name() {
    return undefined;
}
```

`no-self-assign` rule enables props option by default.
So this code is an error.

```js
obj.a = obj.a;
```

https://eslint.org/docs/user-guide/migrating-to-5.0.0

<a name="1.1.0"></a>
## [1.1.0](https://github.com/cybozu/eslint-config/compare/v1.0.1...v1.1.0) (2018-06-13)


### Features

* add presets/es5 and presets/es5-prettier ([939909b](https://github.com/cybozu/eslint-config/commit/939909b))

<a name="1.0.0"></a>
## 1.0.0 (2018/05/29)

* OSS:rocket::rocket::rocket:
