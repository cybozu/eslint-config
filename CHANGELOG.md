# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [16.0.1](https://github.com/cybozu/eslint-config/compare/v16.0.0...v16.0.1) (2021-12-01)


### Bug Fixes

* **deps:** update dependency eslint-plugin-react to ^7.27.1 ([dc9d0ee](https://github.com/cybozu/eslint-config/commit/dc9d0eeee5718e93cb2fec2c6ff86587c4440609))
* **deps:** update typescript-eslint monorepo to ^5.5.0 ([#528](https://github.com/cybozu/eslint-config/issues/528)) ([e106e3f](https://github.com/cybozu/eslint-config/commit/e106e3fa07ac4e0fb264327aae54fa58cb474da3))

## [16.0.0](https://github.com/cybozu/eslint-config/compare/v15.0.0...v16.0.0) (2021-11-16)


### ⚠ BREAKING CHANGES

* this might introduce new errors that added to the recommended rules of `eslint` and `@typescript-eslint`.

### Features

* **deps:** update typescript-eslint monorepo to v5 (major) ([#502](https://github.com/cybozu/eslint-config/issues/502)) ([5969946](https://github.com/cybozu/eslint-config/commit/5969946f997f771a4d251c12770efa354fb13a46))
* support ESLint v8 ([#522](https://github.com/cybozu/eslint-config/issues/522)) ([7f2a786](https://github.com/cybozu/eslint-config/commit/7f2a7862f37159f750f975a3f5cd43f9a0634741)), closes [#501](https://github.com/cybozu/eslint-config/issues/501) [#501](https://github.com/cybozu/eslint-config/issues/501)
    * :warning: `eslint-plugin-node` hasn't supported ESLint v8 yet, so it might not work well with node presets.
* use latest as ecmaVersion in parserOptions ([#509](https://github.com/cybozu/eslint-config/issues/509)) ([4016bf4](https://github.com/cybozu/eslint-config/commit/4016bf4f299867cd13cf4c53c9b4732446b16588))


### Bug Fixes

* **deps:** update dependency eslint to v8 ([#501](https://github.com/cybozu/eslint-config/issues/501)) ([db1a7d0](https://github.com/cybozu/eslint-config/commit/db1a7d0ac84999953998b8aff518d6cdb269220c))
* **deps:** update dependency eslint-plugin-import to ^2.25.2 ([#504](https://github.com/cybozu/eslint-config/issues/504)) ([5f181b2](https://github.com/cybozu/eslint-config/commit/5f181b2c3c49af5d65de65b6729ca14aa89cb539))
* **deps:** update dependency eslint-plugin-import to ^2.25.3 ([7d90d22](https://github.com/cybozu/eslint-config/commit/7d90d22cb4ce081af34c0844c498fde0a628edfc))
* **deps:** update eslint and prettier ([#518](https://github.com/cybozu/eslint-config/issues/518)) ([53b777a](https://github.com/cybozu/eslint-config/commit/53b777a55d4de3f5e84a8a5ea3fca53f358e8d28))
* **deps:** update typescript-eslint monorepo to ^4.32.0 ([#495](https://github.com/cybozu/eslint-config/issues/495)) ([d06278d](https://github.com/cybozu/eslint-config/commit/d06278ddec3732646ac8822e3d80e20a720ec767))
* **deps:** update typescript-eslint monorepo to ^4.33.0 ([#500](https://github.com/cybozu/eslint-config/issues/500)) ([c23edf7](https://github.com/cybozu/eslint-config/commit/c23edf74b1b175fe4cae7e4968f3771549914cab))
* **deps:** update typescript-eslint monorepo to ^5.1.0 ([#512](https://github.com/cybozu/eslint-config/issues/512)) ([494481c](https://github.com/cybozu/eslint-config/commit/494481c4771761fc3c201cfd70a1dcb82e6af0ea))
* **deps:** update typescript-eslint monorepo to ^5.3.1 ([#515](https://github.com/cybozu/eslint-config/issues/515)) ([eb10c1b](https://github.com/cybozu/eslint-config/commit/eb10c1b3394e0df954eab76a15b6daed32244529))
* **deps:** update typescript-eslint monorepo to ^5.4.0 ([#520](https://github.com/cybozu/eslint-config/issues/520)) ([97edd68](https://github.com/cybozu/eslint-config/commit/97edd6814133cf373bff9cdd6411a4764d7e05fa))

## [15.0.0](https://github.com/cybozu/eslint-config/compare/v14.0.3...v15.0.0) (2021-10-01)


### ⚠ BREAKING CHANGES

* drop Prettier v1 support

### Bug Fixes

* **deps:** update dependency eslint-plugin-prettier to v4 ([#479](https://github.com/cybozu/eslint-config/issues/479)) ([87941fd](https://github.com/cybozu/eslint-config/commit/87941fdd300dccbaa24c21d0e4adb875c0b0c7a4))
* **deps:** update dependency eslint-plugin-react to ^7.25.2 ([3fb766b](https://github.com/cybozu/eslint-config/commit/3fb766b119da6c5f9b848175f480d59545f7bd16))
* **deps:** update dependency eslint-plugin-react to ^7.25.3 ([f6a44f4](https://github.com/cybozu/eslint-config/commit/f6a44f42a9a3040e3ff09c950f16206f7db1ea55))
* **deps:** update dependency eslint-plugin-react to ^7.26.0 ([#490](https://github.com/cybozu/eslint-config/issues/490)) ([fd2cf12](https://github.com/cybozu/eslint-config/commit/fd2cf1219ba9965c4ff136ae66c82cc150caa8f8))
* **deps:** update dependency eslint-plugin-react to ^7.26.1 ([92a21a4](https://github.com/cybozu/eslint-config/commit/92a21a456881c9cb7cec482c1b7109d1277c639b))
* **deps:** update eslint and prettier ([#477](https://github.com/cybozu/eslint-config/issues/477)) ([2b15a8c](https://github.com/cybozu/eslint-config/commit/2b15a8c0ec726033ce350f7f27449a38acd198bd))
* **deps:** update typescript-eslint monorepo to ^4.31.0 ([#478](https://github.com/cybozu/eslint-config/issues/478)) ([4d3a5e9](https://github.com/cybozu/eslint-config/commit/4d3a5e9c8f3e4c7a2fff4a289eb75a792d3d8092))
* **deps:** update typescript-eslint monorepo to ^4.31.1 ([c7e1098](https://github.com/cybozu/eslint-config/commit/c7e109832a9669216a4fab5755ec5156130342fc))
* **deps:** update typescript-eslint monorepo to ^4.31.2 ([f2d7150](https://github.com/cybozu/eslint-config/commit/f2d7150bf70a86c7561e9f4a8a8dc8e1c4cffe23))


* drop Prettier v1 support ([#481](https://github.com/cybozu/eslint-config/issues/481)) ([92abff0](https://github.com/cybozu/eslint-config/commit/92abff06bb30d9672ece4d3c6927471c691f469a))

### [14.0.3](https://github.com/cybozu/eslint-config/compare/v14.0.2...v14.0.3) (2021-09-01)


### Bug Fixes

* **deps:** update dependency eslint-plugin-import to ^2.24.0 ([#463](https://github.com/cybozu/eslint-config/issues/463)) ([c5b3668](https://github.com/cybozu/eslint-config/commit/c5b36689b95dcf806aad15d4f55564dad0405423))
* **deps:** update dependency eslint-plugin-import to ^2.24.1 ([5ac5723](https://github.com/cybozu/eslint-config/commit/5ac5723470ab9d0bd71b4b0fccd070bd5958f1a5))
* **deps:** update dependency eslint-plugin-import to ^2.24.2 ([958825e](https://github.com/cybozu/eslint-config/commit/958825e373a4905c9681e3ea22be54912494e053))
* **deps:** update dependency eslint-plugin-prettier to ^3.4.1 ([a2ee5be](https://github.com/cybozu/eslint-config/commit/a2ee5beb76d7ac2f28f4d09921e85568f7483389))
* **deps:** update typescript-eslint monorepo to ^4.28.5 ([1c4a593](https://github.com/cybozu/eslint-config/commit/1c4a59339eebbc9a73807aa56366fcba759d8d3e))
* **deps:** update typescript-eslint monorepo to ^4.29.2 ([#461](https://github.com/cybozu/eslint-config/issues/461)) ([862fc05](https://github.com/cybozu/eslint-config/commit/862fc05ddc33d466fe4fc3e4f34da9705af72952))
* **deps:** update typescript-eslint monorepo to ^4.29.3 ([9bcf715](https://github.com/cybozu/eslint-config/commit/9bcf715bcfc899ea91c56a5f8474394785e56525))

### [14.0.2](https://github.com/cybozu/eslint-config/compare/v14.0.1...v14.0.2) (2021-07-20)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to ^4.28.4 ([#451](https://github.com/cybozu/eslint-config/issues/451)) ([0e45f54](https://github.com/cybozu/eslint-config/commit/0e45f540f8324c9ada8274850792a445c8c2ce7d))

### [14.0.1](https://github.com/cybozu/eslint-config/compare/v14.0.0...v14.0.1) (2021-06-18)


### Bug Fixes

* **deps:** update dependency eslint-plugin-import to ^2.23.3 ([b96c88d](https://github.com/cybozu/eslint-config/commit/b96c88d90ef9f3e6f2cd65d36981197613c70dc8))
* **deps:** update dependency eslint-plugin-import to ^2.23.4 ([5d71704](https://github.com/cybozu/eslint-config/commit/5d71704b4b547d708628514febb9729fbdea9ba9))
* **deps:** update typescript-eslint monorepo to ^4.25.0 ([#433](https://github.com/cybozu/eslint-config/issues/433)) ([5247b6e](https://github.com/cybozu/eslint-config/commit/5247b6e59117daf83a949c8c7ce25d39b4286a78))
* **deps:** update typescript-eslint monorepo to ^4.26.0 ([#438](https://github.com/cybozu/eslint-config/issues/438)) ([85c6647](https://github.com/cybozu/eslint-config/commit/85c664712b6843a2fa3bf57bbe0f71367123097e))
* **deps:** update typescript-eslint monorepo to ^4.26.1 ([f3288d0](https://github.com/cybozu/eslint-config/commit/f3288d05bffc790e1bdbda845e525ff146144094))
* **deps:** update typescript-eslint monorepo to ^4.27.0 ([#448](https://github.com/cybozu/eslint-config/issues/448)) ([b0c30f9](https://github.com/cybozu/eslint-config/commit/b0c30f9f5b55949ab179b336d4039e2531c67d97))

## [14.0.0](https://github.com/cybozu/eslint-config/compare/v13.0.0...v14.0.0) (2021-05-21)


### ⚠ BREAKING CHANGES

* drop support Node v10 because of the EOL

### Bug Fixes

* **deps:** update dependency eslint-plugin-import to ^2.23.2 ([#428](https://github.com/cybozu/eslint-config/issues/428)) ([cd3c5ad](https://github.com/cybozu/eslint-config/commit/cd3c5ad3854239c3bf3ba91d220268c87fd5a1d1))
* **deps:** update typescript-eslint monorepo to ^4.22.1 ([127129f](https://github.com/cybozu/eslint-config/commit/127129f9f041beddee56d5f1080e7a4c013e6070))
* **deps:** update typescript-eslint monorepo to ^4.23.0 ([#427](https://github.com/cybozu/eslint-config/issues/427)) ([00fa1e4](https://github.com/cybozu/eslint-config/commit/00fa1e42787d35bdb3bb8f2b25671500264d03d0))
* **deps:** update typescript-eslint monorepo to ^4.24.0 ([#429](https://github.com/cybozu/eslint-config/issues/429)) ([69832ef](https://github.com/cybozu/eslint-config/commit/69832ef664a0bf3ce99df7a1ee64d4975ec6823c))


* drop Node v10 support because of EOL ([#425](https://github.com/cybozu/eslint-config/issues/425)) ([9f49b36](https://github.com/cybozu/eslint-config/commit/9f49b3626a005e7d88451fa81155784f7764f142))

## [13.0.0](https://github.com/cybozu/eslint-config/compare/v12.0.2...v13.0.0) (2021-04-28)


### ⚠ BREAKING CHANGES

* drop flowytpe support. remove `@cybozu/eslint-config/presets/flowtype`,`@cybozu/eslint-config/presets/flowtype`, and `@cybozu/eslint-config/presets/react-flowtype-prettier`
* enable a11y rules of eslint-plugin-jsx-a11y

### Features

* drop flowtype support ([#412](https://github.com/cybozu/eslint-config/issues/412)) ([37b0f90](https://github.com/cybozu/eslint-config/commit/37b0f907abf8afc790f7906bf5405e16808ef257))
* redefine a11y rules of jsx-a11y strictly [#415](https://github.com/cybozu/eslint-config/issues/415) ([ebaa62c](https://github.com/cybozu/eslint-config/commit/ebaa62c88ceb8d0a2f212421e7ff073321d6dde5))


### Bug Fixes

* **deps:** update typescript-eslint monorepo to ^4.22.0 ([#414](https://github.com/cybozu/eslint-config/issues/414)) ([09862c3](https://github.com/cybozu/eslint-config/commit/09862c3aad5994679c37104a30602909c693a480))

### [12.0.2](https://github.com/cybozu/eslint-config/compare/v12.0.1...v12.0.2) (2021-04-09)


### Bug Fixes

* **deps:** update dependency eslint-plugin-react to ^7.23.1 ([3924a0d](https://github.com/cybozu/eslint-config/commit/3924a0d63bbc560636673f1ef0bce6d1203168c0))
* **deps:** update dependency eslint-plugin-react to ^7.23.2 ([#411](https://github.com/cybozu/eslint-config/issues/411)) ([7ba11b0](https://github.com/cybozu/eslint-config/commit/7ba11b03533302c8b55ef5cc46d45d87944a6477))
* **deps:** update typescript-eslint monorepo to ^4.21.0 ([#407](https://github.com/cybozu/eslint-config/issues/407)) ([88a0d02](https://github.com/cybozu/eslint-config/commit/88a0d02880061082ad964094fb2a9fa301cb80f4))

### [12.0.1](https://github.com/cybozu/eslint-config/compare/v12.0.0...v12.0.1) (2021-03-23)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to ^4.15.2 ([fc78809](https://github.com/cybozu/eslint-config/commit/fc788090e704982e22318333a886294081d6961e))
* **deps:** update typescript-eslint monorepo to ^4.19.0 ([#399](https://github.com/cybozu/eslint-config/issues/399)) ([8049448](https://github.com/cybozu/eslint-config/commit/8049448ef1f5576f872e1ecf84e13c9eed6b488b))

## [12.0.0](https://github.com/cybozu/eslint-config/compare/v11.0.4...v12.0.0) (2021-02-22)

### ⚠ BREAKING CHANGES

* **deps:** all prettier presets are now included all prettier configs
This might change your code format
* fix: all configs of eslint-config-prettier have been merged

### Bug Fixes

* **deps:** update dependency eslint-config-prettier to v8 ([#395](https://github.com/cybozu/eslint-config/issues/395)) ([46a5806](https://github.com/cybozu/eslint-config/commit/46a5806b13a775915bb5ef27105569336dc922f0))
* **deps:** update dependency eslint-plugin-flowtype to ^5.2.1 ([4c753c0](https://github.com/cybozu/eslint-config/commit/4c753c085a18bed968dba6c1154281ce300ec773))
* **deps:** update dependency eslint-plugin-flowtype to ^5.2.2 ([2aec5c8](https://github.com/cybozu/eslint-config/commit/2aec5c8d323325dd02526625823f5128dff343b4))
* **deps:** update typescript-eslint monorepo to ^4.15.1 ([4561a28](https://github.com/cybozu/eslint-config/commit/4561a28fc11a1194ce7f17b67429c5429058d236))

### [11.0.4](https://github.com/cybozu/eslint-config/compare/v11.0.3...v11.0.4) (2021-02-10)


### Bug Fixes

* **deps:** update dependency eslint-config-prettier to v7 ([#373](https://github.com/cybozu/eslint-config/issues/373)) ([585ff4b](https://github.com/cybozu/eslint-config/commit/585ff4b2a4c6aca6068b878f7d3bdb8a1a49757a))
* **deps:** update typescript-eslint monorepo to ^4.15.0 ([#381](https://github.com/cybozu/eslint-config/issues/381)) ([2e3aab4](https://github.com/cybozu/eslint-config/commit/2e3aab49f7ff0a50fba4cc9a1cd9cb4280576608))
* **deps:** update typescript-eslint monorepo to ^4.8.2 ([c9d7a30](https://github.com/cybozu/eslint-config/commit/c9d7a30282c93019cc8afd193688c6f516ff4501))
* **deps:** update typescript-eslint monorepo to ^4.9.0 ([#371](https://github.com/cybozu/eslint-config/issues/371)) ([50d4d7e](https://github.com/cybozu/eslint-config/commit/50d4d7e452cc8be1d0fb9c4545f5ca386a0e1c88))
* **deps:** update typescript-eslint monorepo to ^4.9.1 ([e621aed](https://github.com/cybozu/eslint-config/commit/e621aed27a9ce8ffb0e4204a220292738c4a148b))

### [11.0.3](https://github.com/cybozu/eslint-config/compare/v11.0.2...v11.0.3) (2020-11-24)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to ^4.8.1 ([#361](https://github.com/cybozu/eslint-config/issues/361)) ([cf5c94a](https://github.com/cybozu/eslint-config/commit/cf5c94aafeceb8445cbe22291fd226aea147789a))

### [11.0.2](https://github.com/cybozu/eslint-config/compare/v11.0.1...v11.0.2) (2020-11-09)


### Bug Fixes

* **deps:** update dependency eslint-config-prettier to ^6.13.0 ([#346](https://github.com/cybozu/eslint-config/issues/346)) ([0a34dfc](https://github.com/cybozu/eslint-config/commit/0a34dfc70483f9cdc27c67984913e1ccd79ca471))
* **deps:** update dependency eslint-plugin-react to ^7.21.5 ([6132349](https://github.com/cybozu/eslint-config/commit/613234918e61c23ae1b48d5aaa34c8b77b09dea1))
* **deps:** update typescript-eslint monorepo to ^4.6.0 ([6fb31d8](https://github.com/cybozu/eslint-config/commit/6fb31d89de55525453a32478a87c3d796c272bbd))
* **deps:** update typescript-eslint monorepo to ^4.6.0 (minor) ([2f7a500](https://github.com/cybozu/eslint-config/commit/2f7a500c1f23df7cb5ead01c906b39a27fd89a26))
* **deps:** update typescript-eslint monorepo to ^4.6.1 ([9bb4f9a](https://github.com/cybozu/eslint-config/commit/9bb4f9a0ca12a37a7a6dbd4731d750378bf85dc3))

### [11.0.1](https://github.com/cybozu/eslint-config/compare/v11.0.0...v11.0.1) (2020-10-14)


### Bug Fixes

* **deps:** update dependency eslint-plugin-import to ^2.22.1 ([2c69d5d](https://github.com/cybozu/eslint-config/commit/2c69d5d74fc7498e4b79e8fa3510ded853f0dd59))
* **deps:** update dependency eslint-plugin-jsx-a11y to ^6.3.1 ([98eabc5](https://github.com/cybozu/eslint-config/commit/98eabc5d9c0bd6ad1111a7b99638df31f8210582))
* **deps:** update dependency eslint-plugin-react to ^7.20.4 ([872ef7a](https://github.com/cybozu/eslint-config/commit/872ef7a698a22a69259cd1166ec58fdb263df86d))
* **deps:** update dependency eslint-plugin-react to ^7.20.5 ([a003cf8](https://github.com/cybozu/eslint-config/commit/a003cf82a260672aeea3c1f6882568462f6269f8))
* **deps:** update dependency eslint-plugin-react to ^7.20.6 ([e6aabf5](https://github.com/cybozu/eslint-config/commit/e6aabf5959b41721d6d08086ab0c93a1854ce746))
* **deps:** update dependency eslint-plugin-react to ^7.21.3 ([df87ce5](https://github.com/cybozu/eslint-config/commit/df87ce5a38fb25d5c12bfa98a7f3d48277b1a95e))
* **deps:** update dependency eslint-plugin-react to ^7.21.4 ([3d100fc](https://github.com/cybozu/eslint-config/commit/3d100fc8037e3ad09061170451d1dcf23031f7b6))
* **deps:** update dependency eslint-plugin-react-hooks to ^4.0.6 ([a70eda1](https://github.com/cybozu/eslint-config/commit/a70eda113a9501eee79ca3ce14cd93e9d609155f))
* **deps:** update dependency eslint-plugin-react-hooks to ^4.0.7 ([2f5f0f9](https://github.com/cybozu/eslint-config/commit/2f5f0f9b59159327e0bba3cea04f1b776dfbc14e))
* **deps:** update dependency eslint-plugin-react-hooks to ^4.0.8 ([a2dc7e1](https://github.com/cybozu/eslint-config/commit/a2dc7e1fa0c8b25eeb3fa4f508c6de1efa885273))
* **deps:** update dependency eslint-plugin-react-hooks to ^4.1.2 ([3e016fa](https://github.com/cybozu/eslint-config/commit/3e016fa64879995f6432879989f91124a4ff5889))
* **deps:** update dependency typescript to v4 ([#320](https://github.com/cybozu/eslint-config/issues/320)) ([b3c394a](https://github.com/cybozu/eslint-config/commit/b3c394a6aa8d2ca1097a3bc87e092f8ce51fc064))
* **deps:** update eslint and prettier ([88493c5](https://github.com/cybozu/eslint-config/commit/88493c585441b3d0ba7cb739667420c9ed0ddb2e))
* **deps:** update typescript-eslint monorepo to ^3.3.0 ([#288](https://github.com/cybozu/eslint-config/issues/288)) ([be8f4d2](https://github.com/cybozu/eslint-config/commit/be8f4d275566b418aaa277b9834671c8acb57095))
* **deps:** update typescript-eslint monorepo to ^3.4.0 ([#291](https://github.com/cybozu/eslint-config/issues/291)) ([7fc5525](https://github.com/cybozu/eslint-config/commit/7fc5525769caa60c5de8b7c858e796f202fd8bf8))
* **deps:** update typescript-eslint monorepo to ^3.8.0 ([#295](https://github.com/cybozu/eslint-config/issues/295)) ([66668c3](https://github.com/cybozu/eslint-config/commit/66668c3f00e6370e04f79619400fa84aab6738ec))
* **deps:** update typescript-eslint monorepo to ^3.9.0 ([#315](https://github.com/cybozu/eslint-config/issues/315)) ([0481d12](https://github.com/cybozu/eslint-config/commit/0481d12e2e9564e796a178b5cdac062038d1818b))
* **deps:** update typescript-eslint monorepo to ^3.9.1 ([9f80d62](https://github.com/cybozu/eslint-config/commit/9f80d6290f04a4c18f81819ab57808175c6268b1))
* **deps:** update typescript-eslint monorepo to v4 ([#333](https://github.com/cybozu/eslint-config/issues/333)) ([8c0e4c1](https://github.com/cybozu/eslint-config/commit/8c0e4c1b49eb32592020834897b3afa9dc7478c7))

## [11.0.0](https://github.com/cybozu/eslint-config/compare/v10.0.4...v11.0.0) (2020-06-19)


### ⚠ BREAKING CHANGES

* Support ESLint v7 (#272) ([398512d](https://github.com/cybozu/eslint-config/commit/398512df0ed8a315fa361e4a3a7cb48124f60067)), closes [#272](https://github.com/cybozu/eslint-config/issues/272)
* Support minimum ESLint version is v7.
* eslint-plugin-react-hooks reports new errors
* enable new rules in typescript-eslint/recommended


### [10.0.4](https://github.com/cybozu/eslint-config/compare/v10.0.3...v10.0.4) (2020-06-04)


### Bug Fixes

* **deps:** update eslint and prettier (minor) ([#253](https://github.com/cybozu/eslint-config/issues/253)) ([be47bfd](https://github.com/cybozu/eslint-config/commit/be47bfdda9beec476c8bec3f92084b2980579664))
* **deps:** update typescript-eslint monorepo to ^2.34.0 (minor) ([#268](https://github.com/cybozu/eslint-config/issues/268)) ([d686270](https://github.com/cybozu/eslint-config/commit/d68627061e0abd1b6a729b56f1fe3bfc34e1fdd8))

### [10.0.3](https://github.com/cybozu/eslint-config/compare/v10.0.2...v10.0.3) (2020-04-28)


### Bug Fixes

* **deps:** update dependency eslint-plugin-import to ^2.20.2 ([55c49f3](https://github.com/cybozu/eslint-config/commit/55c49f3c6cf267f65293e1a3decb9d3cf5d66a46))
* **deps:** update dependency eslint-plugin-prettier to ^3.1.3 ([f3cc170](https://github.com/cybozu/eslint-config/commit/f3cc170b4d9f259094a6527e87fd3bc24818cce7))
* **deps:** update typescript-eslint monorepo to ^2.27.0 ([#252](https://github.com/cybozu/eslint-config/issues/252)) ([8d8b772](https://github.com/cybozu/eslint-config/commit/8d8b7723df626f6816c1c5a2ce9835c180a9e4a2))
* **deps:** update typescript-eslint monorepo to ^2.28.0 ([4aca410](https://github.com/cybozu/eslint-config/commit/4aca410145c28c0139608d19e1fb2a79b84cad70))
* **deps:** update typescript-eslint monorepo to ^2.28.0 (minor) ([91a8fdf](https://github.com/cybozu/eslint-config/commit/91a8fdf66f3693bbcc9574f9332b15a485dca2c7))
* **deps:** update typescript-eslint monorepo to ^2.29.0 ([#266](https://github.com/cybozu/eslint-config/issues/266)) ([2167655](https://github.com/cybozu/eslint-config/commit/2167655823ed46ac9d727713a97a036b5442967a))

### [10.0.2](https://github.com/cybozu/eslint-config/compare/v10.0.1...v10.0.2) (2020-03-24)


### Bug Fixes

* **deps:** update dependency babel-eslint to ^10.1.0 ([#243](https://github.com/cybozu/eslint-config/issues/243)) ([efd2f98](https://github.com/cybozu/eslint-config/commit/efd2f987d92bfc7cd7e8a5bfbe8f993a02442f8e))
* **deps:** update dependency eslint-config-prettier to ^6.10.1 ([5681dce](https://github.com/cybozu/eslint-config/commit/5681dce3f70b6ce015e65d61997f4b060102e649))
* **deps:** update dependency eslint-plugin-react-hooks to ^2.5.1 ([0ae7e2d](https://github.com/cybozu/eslint-config/commit/0ae7e2d6bf29512e729f82b57edd84661f65ad6f))
* **deps:** update eslint and prettier ([#235](https://github.com/cybozu/eslint-config/issues/235)) ([36592a9](https://github.com/cybozu/eslint-config/commit/36592a9f9af4a080c04395d3841688363f7be1d1))
* **deps:** update typescript-eslint monorepo to ^2.23.0 ([#240](https://github.com/cybozu/eslint-config/issues/240)) ([7c5b9c9](https://github.com/cybozu/eslint-config/commit/7c5b9c951ad5b74a91fe1a9d1db43bd1fff9fb5b))
* **deps:** update typescript-eslint monorepo to ^2.24.0 ([#247](https://github.com/cybozu/eslint-config/issues/247)) ([963fb43](https://github.com/cybozu/eslint-config/commit/963fb435a6e55421b64f81f1a7d0ed108d0dbf3e))

### [10.0.1](https://github.com/cybozu/eslint-config/compare/v10.0.0...v10.0.1) (2020-02-25)


### Bug Fixes

* **deps:** update dependency eslint-plugin-import to ^2.20.1 ([8e59618](https://github.com/cybozu/eslint-config/commit/8e59618fc471550be99a83bc0ba8d01eabe93bda))
* **deps:** update eslint and prettier ([#226](https://github.com/cybozu/eslint-config/issues/226)) ([7facb67](https://github.com/cybozu/eslint-config/commit/7facb674db795a82f9701a65af3b3f04e68e6b95))
* **deps:** update typescript-eslint monorepo to ^2.20.0 ([#228](https://github.com/cybozu/eslint-config/issues/228)) ([df61b87](https://github.com/cybozu/eslint-config/commit/df61b877807a7d283fe51e09cb664e4f25b76736))

## [10.0.0](https://github.com/cybozu/eslint-config/compare/v9.0.1...v10.0.0) (2020-01-28)


### ⚠ BREAKING CHANGES

* drop node 8 support

### Bug Fixes

* use detect option for React version ([#196](https://github.com/cybozu/eslint-config/issues/196)) ([ea6dcdf](https://github.com/cybozu/eslint-config/commit/ea6dcdfa90d2155dc928a8f364463ff3d4ca0982))
* **deps:** update dependency eslint-config-prettier to ^6.9.0 ([1f35fcf](https://github.com/cybozu/eslint-config/commit/1f35fcf2b7dca6998cc658d0a5f0f2bfe8151a91))
* **deps:** update dependency eslint-plugin-flowtype to ^4.5.3 ([b4ba709](https://github.com/cybozu/eslint-config/commit/b4ba709cfa85b5c257ffab580e9d4237e0db5766))
* **deps:** update dependency eslint-plugin-node to v11 ([#218](https://github.com/cybozu/eslint-config/issues/218)) ([5db1c04](https://github.com/cybozu/eslint-config/commit/5db1c04768474597a93689a4b2541a7c6f0b4f1e))
* **deps:** update eslint and prettier ([#225](https://github.com/cybozu/eslint-config/issues/225)) ([fe32491](https://github.com/cybozu/eslint-config/commit/fe32491b02d6e6446738a307cda11536784a785a))
* **deps:** update typescript-eslint monorepo to ^2.13.0 ([#182](https://github.com/cybozu/eslint-config/issues/182)) ([aecd4ed](https://github.com/cybozu/eslint-config/commit/aecd4ed3918a75df6dc5ba98a1e189c91f48ca99))
* **deps:** update typescript-eslint monorepo to ^2.14.0 ([1f0803d](https://github.com/cybozu/eslint-config/commit/1f0803dcfa83d70c0e693f6d49d1757aeeff5106))
* **deps:** update typescript-eslint monorepo to ^2.16.0 ([58b288f](https://github.com/cybozu/eslint-config/commit/58b288f26ee8233361dc3b1e16c8829ad5e2ed43))


* drop node 8 support ([3421fb4](https://github.com/cybozu/eslint-config/commit/3421fb43dcc73adca93a730ef7e5341adcbe4ae2))

### [9.0.1](https://github.com/cybozu/eslint-config/compare/v9.0.0...v9.0.1) (2019-12-27)


### Bug Fixes

* fail node/no-missing-import rule on TS files ([#215](https://github.com/cybozu/eslint-config/issues/215)) ([cac1f84](https://github.com/cybozu/eslint-config/commit/cac1f84e60783a4df0fc191b8412ad0126d08b81))

## [9.0.0](https://github.com/cybozu/eslint-config/compare/v8.1.0...v9.0.0) (2019-12-24)


### ⚠ BREAKING CHANGES

* **deps:** add `node/no-exports-assign` rule

### Bug Fixes

* **deps:** update dependency eslint-plugin-node to v10 ([#181](https://github.com/cybozu/eslint-config/issues/181)) ([5c9a0cc](https://github.com/cybozu/eslint-config/commit/5c9a0cc5671ca5238830a1b0e5b5f0e21d60876c))
* **deps:** update dependency eslint-plugin-prettier to ^3.1.2 ([e48a98b](https://github.com/cybozu/eslint-config/commit/e48a98bd50386d9a83409642738ba351693e616d))

## [8.1.0](https://github.com/cybozu/eslint-config/compare/v8.0.0...v8.1.0) (2019-11-22)


### Features

* support es2019 syntax ([387631a](https://github.com/cybozu/eslint-config/commit/387631a30c64eabd52e985d59d0ef6a8e9514542))

## [8.0.0](https://github.com/cybozu/eslint-config/compare/v7.1.0...v8.0.0) (2019-10-23)


### ⚠ BREAKING CHANGES

* enable no-import-assign, default-param-last, prefer-regex-literals rules
* drop support for ESLint less than v6.4.0

### deps

* update ESLint version to v6.4.0 ([be1001a](https://github.com/cybozu/eslint-config/commit/be1001a))


### Features

* enable new rules(no-import-assign, default-param-last, prefer-regex-literals) ([351b73b](https://github.com/cybozu/eslint-config/commit/351b73b))

## [7.1.0](https://github.com/cybozu/eslint-config/compare/v7.0.0...v7.1.0) (2019-09-24)


### Bug Fixes

* **deps:** update dependency babel-eslint to ^10.0.3 ([#174](https://github.com/cybozu/eslint-config/issues/174)) ([7ded5ec](https://github.com/cybozu/eslint-config/commit/7ded5ec))
* **deps:** update dependency eslint-plugin-node to ^9.2.0 ([#176](https://github.com/cybozu/eslint-config/issues/176)) ([fab715c](https://github.com/cybozu/eslint-config/commit/fab715c))
* **deps:** update dependency eslint-plugin-prettier to ^3.1.1 ([a066e5c](https://github.com/cybozu/eslint-config/commit/a066e5c))
* **deps:** update eslint and prettier ([#180](https://github.com/cybozu/eslint-config/issues/180)) ([e2b5ba0](https://github.com/cybozu/eslint-config/commit/e2b5ba0))
* **deps:** update typescript-eslint monorepo to ^2.1.0 ([#179](https://github.com/cybozu/eslint-config/issues/179)) ([5a59f86](https://github.com/cybozu/eslint-config/commit/5a59f86))


### Features

* **typescript:** disable typescript-eslint/ban-ts-ignore ([#185](https://github.com/cybozu/eslint-config/issues/185)) ([d2c0549](https://github.com/cybozu/eslint-config/commit/d2c0549))

## [7.0.0](https://github.com/cybozu/eslint-config/compare/v6.0.2...v7.0.0) (2019-08-27)


### ⚠ BREAKING CHANGES

* This adds some rules enabled by plugin:@typescript-eslint/recommended

### Bug Fixes

* **deps:** update dependency eslint-plugin-flowtype to ^3.13.0 ([#161](https://github.com/cybozu/eslint-config/issues/161)) ([f224d87](https://github.com/cybozu/eslint-config/commit/f224d87))
* **deps:** update dependency eslint-plugin-flowtype to v4 ([27d70f5](https://github.com/cybozu/eslint-config/commit/27d70f5))
* **deps:** update dependency eslint-plugin-react-hooks to ^1.7.0 ([#164](https://github.com/cybozu/eslint-config/issues/164)) ([c3db34b](https://github.com/cybozu/eslint-config/commit/c3db34b))
* **deps:** update dependency eslint-plugin-react-hooks to v2 ([#171](https://github.com/cybozu/eslint-config/issues/171)) ([64dfa3a](https://github.com/cybozu/eslint-config/commit/64dfa3a))


### deps

* update [@typescript-eslint](https://github.com/typescript-eslint) to v2 ([#169](https://github.com/cybozu/eslint-config/issues/169)) ([301ac74](https://github.com/cybozu/eslint-config/commit/301ac74))

### [6.0.2](https://github.com/cybozu/eslint-config/compare/v6.0.1...v6.0.2) (2019-08-01)


### Bug Fixes

* **deps:** update dependency eslint-plugin-flowtype to ^3.12.2 ([1ac7ec6](https://github.com/cybozu/eslint-config/commit/1ac7ec6))
* **deps:** update dependency eslint-plugin-react to ^7.14.3 ([08a1879](https://github.com/cybozu/eslint-config/commit/08a1879))



### [6.0.1](https://github.com/cybozu/eslint-config/compare/v6.0.0...v6.0.1) (2019-07-23)


### Bug Fixes

* **deps:** update dependency eslint-plugin-flowtype to ^3.12.1 ([#150](https://github.com/cybozu/eslint-config/issues/150)) ([035d7a3](https://github.com/cybozu/eslint-config/commit/035d7a3))
* **deps:** update dependency eslint-plugin-import to ^2.18.2 ([3dbc20b](https://github.com/cybozu/eslint-config/commit/3dbc20b))
* **deps:** update typescript-eslint monorepo to ^1.13.0 ([#154](https://github.com/cybozu/eslint-config/issues/154)) ([e75c144](https://github.com/cybozu/eslint-config/commit/e75c144))



## [6.0.0](https://github.com/cybozu/eslint-config/compare/v5.2.0...v6.0.0) (2019-07-19)


### Bug Fixes

* **deps:** update dependency babel-eslint to v10 ([df83204](https://github.com/cybozu/eslint-config/commit/df83204))
* **deps:** update eslint and prettier ([98f7275](https://github.com/cybozu/eslint-config/commit/98f7275))
* **deps:** update typescript-eslint monorepo to ^1.12.0 ([#145](https://github.com/cybozu/eslint-config/issues/145)) ([c2558d6](https://github.com/cybozu/eslint-config/commit/c2558d6))


### Features

* drop eslint v5 ([4fe6e10](https://github.com/cybozu/eslint-config/commit/4fe6e10))


### BREAKING CHANGES

* dropping eslint v5,eslint v6 only supporting



## [5.2.0](https://github.com/cybozu/eslint-config/compare/v5.1.1...v5.2.0) (2019-07-09)


### Bug Fixes

* **deps:** update dependency eslint-plugin-jsx-a11y to v6.2.3 ([392ec2f](https://github.com/cybozu/eslint-config/commit/392ec2f))
* **deps:** update dependency eslint-plugin-react-hooks to ^1.6.1 ([fddd5ed](https://github.com/cybozu/eslint-config/commit/fddd5ed))
* **deps:** update eslint and prettier ([26a65df](https://github.com/cybozu/eslint-config/commit/26a65df))
* **deps:** update eslint and prettier ([1a4a1ff](https://github.com/cybozu/eslint-config/commit/1a4a1ff))
* **deps:** update typescript-eslint monorepo to ^1.11.0 ([b08cbf4](https://github.com/cybozu/eslint-config/commit/b08cbf4))



## [5.1.1](https://github.com/cybozu/eslint-config/compare/v5.1.0...v5.1.1) (2019-06-25)


### Bug Fixes

* **deps:** update eslint and prettier ([#116](https://github.com/cybozu/eslint-config/issues/116)) ([6c43e4c](https://github.com/cybozu/eslint-config/commit/6c43e4c))



# [5.1.0](https://github.com/cybozu/eslint-config/compare/v5.0.1...v5.1.0) (2019-06-18)


### Features

* **react-typescript:** disable prop-types ([#134](https://github.com/cybozu/eslint-config/issues/134)) ([0ee3b18](https://github.com/cybozu/eslint-config/commit/0ee3b18))



## [5.0.1](https://github.com/cybozu/eslint-config/compare/v5.0.0...v5.0.1) (2019-06-14)


### Bug Fixes

* add @typescript-eslint/parser into the dependencies ([#132](https://github.com/cybozu/eslint-config/issues/132)) ([a1ab6df](https://github.com/cybozu/eslint-config/commit/a1ab6df))



# [5.0.0](https://github.com/cybozu/eslint-config/compare/v4.0.1...v5.0.0) (2019-06-11)


### Bug Fixes

* **deps:** update dependency @typescript-eslint/eslint-plugin to ^1.9.0 ([#114](https://github.com/cybozu/eslint-config/issues/114)) ([d400cab](https://github.com/cybozu/eslint-config/commit/d400cab))
* **deps:** update dependency eslint-plugin-import to ^2.17.3 ([1fa3fc9](https://github.com/cybozu/eslint-config/commit/1fa3fc9))


### Continuous Integration

* drop Node v6 and add Node v12 as supporting versions ([#130](https://github.com/cybozu/eslint-config/issues/130)) ([453956c](https://github.com/cybozu/eslint-config/commit/453956c))


### BREAKING CHANGES

* drop Node v6 support



## [4.0.1](https://github.com/cybozu/eslint-config/compare/v4.0.0...v4.0.1) (2019-04-23)


### Bug Fixes

* **deps:** update dependency eslint-plugin-flowtype to ^3.6.1 ([c5205e6](https://github.com/cybozu/eslint-config/commit/c5205e6))
* **deps:** update eslint and prettier ([#110](https://github.com/cybozu/eslint-config/issues/110)) ([35f70ca](https://github.com/cybozu/eslint-config/commit/35f70ca))



# [4.0.0](https://github.com/cybozu/eslint-config/compare/v3.2.1...v4.0.0) (2019-04-10)


### Bug Fixes

* **deps:** update dependency @typescript-eslint/eslint-plugin to ^1.6.0 ([#100](https://github.com/cybozu/eslint-config/issues/100)) ([14f0cfa](https://github.com/cybozu/eslint-config/commit/14f0cfa))
* **deps:** update dependency eslint-plugin-flowtype to ^3.6.0 ([#101](https://github.com/cybozu/eslint-config/issues/101)) ([8e21b43](https://github.com/cybozu/eslint-config/commit/8e21b43))


### Features

* **eslint-plugin-react:** enable react/jsx-props-no-multi-spaces as a warning ([4f42a62](https://github.com/cybozu/eslint-config/commit/4f42a62))
* enable eslint-plugin-react-hooks ([aaf3d1d](https://github.com/cybozu/eslint-config/commit/aaf3d1d))
* **react:** add jsx-a11y rules as warning ([d12a242](https://github.com/cybozu/eslint-config/commit/d12a242))


### BREAKING CHANGES

* This introduce new errors about React Hooks



## [3.2.1](https://github.com/cybozu/eslint-config/compare/v3.2.0...v3.2.1) (2019-04-04)


### Bug Fixes

* **perf:** typescript: disable rules required type infomation ([#98](https://github.com/cybozu/eslint-config/issues/98)) ([dccce73](https://github.com/cybozu/eslint-config/commit/dccce73))



# [3.2.0](https://github.com/cybozu/eslint-config/compare/v3.1.0...v3.2.0) (2019-04-03)


### Features

* Support TypeScript ([#93](https://github.com/cybozu/eslint-config/issues/93)) ([8b7012f](https://github.com/cybozu/eslint-config/commit/8b7012f)) 🎉🎉🎉



# [3.1.0](https://github.com/cybozu/eslint-config/compare/v3.0.3...v3.1.0) (2019-03-26)


### Bug Fixes

* **deps:** Fix `release` script ([9f12835](https://github.com/cybozu/eslint-config/commit/9f12835))
* **deps:** update dependency eslint-config-prettier to ^4.1.0 ([#84](https://github.com/cybozu/eslint-config/issues/84)) ([e9d3e4a](https://github.com/cybozu/eslint-config/commit/e9d3e4a))
* **deps:** update dependency eslint-config-prettier to v4 ([#74](https://github.com/cybozu/eslint-config/issues/74)) ([54d49d3](https://github.com/cybozu/eslint-config/commit/54d49d3))
* **deps:** update dependency eslint-plugin-flowtype to ^3.2.1 ([222513f](https://github.com/cybozu/eslint-config/commit/222513f))
* **deps:** update dependency eslint-plugin-flowtype to ^3.4.2 ([05422fe](https://github.com/cybozu/eslint-config/commit/05422fe))
* **deps:** update dependency eslint-plugin-node to ^8.0.1 ([304f646](https://github.com/cybozu/eslint-config/commit/304f646))
* **deps:** update eslint and prettier ([#77](https://github.com/cybozu/eslint-config/issues/77)) ([4ed4703](https://github.com/cybozu/eslint-config/commit/4ed4703))


### Features

* allow jQuery Deferred for new-cap ([#80](https://github.com/cybozu/eslint-config/issues/80)) ([f434323](https://github.com/cybozu/eslint-config/commit/f434323))



<a name="3.0.3"></a>
## [3.0.3](https://github.com/cybozu/eslint-config/compare/v3.0.2...v3.0.3) (2018-12-26)



<a name="3.0.2"></a>
## [3.0.2](https://github.com/cybozu/eslint-config/compare/v2.2.1...v3.0.2) (2018-11-20)


### Bug Fixes

* eslint peerDeps version should be 5.3.0 ([#51](https://github.com/cybozu/eslint-config/issues/51)) ([4486c7d](https://github.com/cybozu/eslint-config/commit/4486c7d))
* **deps:** update dependency eslint-plugin-flowtype to ^3.2.0 ([#56](https://github.com/cybozu/eslint-config/issues/56)) ([f6665a6](https://github.com/cybozu/eslint-config/commit/f6665a6))
* **deps:** update dependency eslint-plugin-node to v8 ([#57](https://github.com/cybozu/eslint-config/issues/57)) ([cb53826](https://github.com/cybozu/eslint-config/commit/cb53826))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/cybozu/eslint-config/compare/v3.0.0...v3.0.1) (2018-10-10)


### Bug Fixes

* eslint peerDeps version should be 5.3.0 ([#51](https://github.com/cybozu/eslint-config/issues/51)) ([4486c7d](https://github.com/cybozu/eslint-config/commit/4486c7d))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/cybozu/eslint-config/compare/v2.2.1...v3.0.0) (2018-10-10)


### Bug Fixes

* **deps:** update dependency eslint-plugin-flowtype to ^2.50.3 ([71080aa](https://github.com/cybozu/eslint-config/commit/71080aa))
* **deps:** update dependency eslint-plugin-jsx-a11y to v6.1.2 ([318d7f8](https://github.com/cybozu/eslint-config/commit/318d7f8))
* **deps:** update dependency eslint-plugin-prettier to v3 ([#48](https://github.com/cybozu/eslint-config/issues/48)) ([2643dcf](https://github.com/cybozu/eslint-config/commit/2643dcf))


### Features

* add require-atomic-updates and no-async-promise-executor ([#50](https://github.com/cybozu/eslint-config/issues/50)) ([5704b67](https://github.com/cybozu/eslint-config/commit/5704b67))


### BREAKING CHANGES

* this adds new errors for Async Functions
    * [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)
    * [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)
* update minimum required ESLint version to 5.3.0
* update minimum required pretter version to 1.13.0



<a name="2.2.1"></a>
## [2.2.1](https://github.com/cybozu/eslint-config/compare/v2.2.0...v2.2.1) (2018-09-28)


### Bug Fixes

* eslint-plugin-node should be dependencies, not devDependencies ([#45](https://github.com/cybozu/eslint-config/issues/45)) ([51bbc1e](https://github.com/cybozu/eslint-config/commit/51bbc1e))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/cybozu/eslint-config/compare/v2.1.1...v2.2.0) (2018-09-28)


### Features

* add cybozu/eslint-config/presets/node and presets/node-prettier ([#44](https://github.com/cybozu/eslint-config/issues/44)) ([3c6c3ce](https://github.com/cybozu/eslint-config/commit/3c6c3ce))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/cybozu/eslint-config/compare/v2.1.0...v2.1.1) (2018-09-28)


### Bug Fixes

* add `globals` into files section in package.json ([#43](https://github.com/cybozu/eslint-config/issues/43)) ([74bf183](https://github.com/cybozu/eslint-config/commit/74bf183))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/cybozu/eslint-config/compare/v2.0.2...v2.1.0) (2018-09-28)

## Rule Changes

`wrap-iife` now accepts `inside` style.

* Before

```js
// OK
(function () {
}());

// Error
(function () {
})();
```

* After

```js
// OK
(function () {
}());

// OK
(function () {
})();
```

### :warning: New warnings

* `max-params`

Warn if you pass over 8 arguments to functions.

```js
// Warning
function foo(a, b, c, d, e, f, g, h) {}
```

* `max-nested-callbacks`

Warn if you nest functions over 5 levels.

```js
// Warning
foo(() => {
  foo(() => {
    foo(() => {
      foo(() => {
        foo(() => {
          foo(() => {});
        });
      });
    });
  });
});
```

### Bug Fixes

* **deps:** update dependency eslint-plugin-flowtype to ^2.50.1 ([1853a0f](https://github.com/cybozu/eslint-config/commit/1853a0f))
* **deps:** update eslint and prettier ([#36](https://github.com/cybozu/eslint-config/issues/36)) ([f02fb84](https://github.com/cybozu/eslint-config/commit/f02fb84))


### Features

* add new warnings(max-params, max-nested-callbacks) ([#37](https://github.com/cybozu/eslint-config/issues/37)) ([700c0a1](https://github.com/cybozu/eslint-config/commit/700c0a1))
* add presets which are kintone-customize-es5 and kintone-customize-es5-prettier ([#39](https://github.com/cybozu/eslint-config/issues/39)) ([8b5ba1d](https://github.com/cybozu/eslint-config/commit/8b5ba1d))
* change wrap-iife rule to any from outside ([#42](https://github.com/cybozu/eslint-config/issues/42)) ([e167872](https://github.com/cybozu/eslint-config/commit/e167872))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/cybozu/eslint-config/compare/v2.0.1...v2.0.2) (2018-09-12)


### Bug Fixes

* **deps:** update dependency babel-eslint to v9 ([#30](https://github.com/cybozu/eslint-config/issues/30)) ([7de8f7b](https://github.com/cybozu/eslint-config/commit/7de8f7b))
* **deps:** update dependency eslint-plugin-import to ^2.14.0 ([#27](https://github.com/cybozu/eslint-config/issues/27)) ([7983f6a](https://github.com/cybozu/eslint-config/commit/7983f6a))
* **deps:** update dependency eslint-plugin-react to ^7.11.1 ([#29](https://github.com/cybozu/eslint-config/issues/29)) ([208f230](https://github.com/cybozu/eslint-config/commit/208f230))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/cybozu/eslint-config/compare/v2.0.0...v2.0.1) (2018-08-07)


### Bug Fixes

* **deps:** update dependency babel-eslint to ^8.2.6 ([#21](https://github.com/cybozu/eslint-config/issues/21)) ([db7856e](https://github.com/cybozu/eslint-config/commit/db7856e))
* **deps:** update dependency eslint-plugin-flowtype to ^2.50.0 ([#20](https://github.com/cybozu/eslint-config/issues/20)) ([a88c105](https://github.com/cybozu/eslint-config/commit/a88c105))
* **deps:** update dependency eslint-plugin-jsx-a11y to v6.1.1 ([9e25686](https://github.com/cybozu/eslint-config/commit/9e25686))



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
