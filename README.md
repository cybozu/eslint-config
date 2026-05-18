# @cybozu/eslint-config

[![npm version](https://badge.fury.io/js/%40cybozu%2Feslint-config.svg)](https://badge.fury.io/js/%40cybozu%2Feslint-config)

A shared **[Oxlint](https://oxc.rs/docs/guide/usage/linter)** configuration for Cybozu.

> **v26.0.0**: This package has migrated from ESLint to Oxlint. See [Migration from v25](#migration-from-v25-eslint--v26-oxlint) for details.

## What is this?

A set of Oxlint configuration presets that share lint rules for Cybozu projects.

- Share best practices for JavaScript / TypeScript
- Standardize the lint baseline across Cybozu codebases
- Centralize ongoing maintenance so consumers don't have to track upstream rule changes

Code formatting is intentionally **not** included in these presets — use [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) (or Prettier, if you prefer) as a separate tool. CSS linting is also out of scope — use stylelint.

## Rule severity policy

- **error**: code likely diverges from our practices; must be fixed.
- **warn**: code style we discourage; should be addressed.

## Versioning policy

1. Major: changes that can produce new errors.
1. Minor: changes that can produce new warnings.
1. Patch: changes that produce neither.

## Installation

```bash
npm install --save-dev oxlint @cybozu/eslint-config
# For type-aware TypeScript rules (recommended):
npm install --save-dev oxlint-tsgolint
```

> Type-aware rules require **TypeScript 7+** and `oxlint-tsgolint`. See [Oxlint Type-aware linting](https://oxc.rs/docs/guide/usage/linter/type-aware).

## Usage

Pick a preset and reference it from `.oxlintrc.json` via `extends`:

```json
{
  "extends": ["@cybozu/eslint-config/presets/react-typescript"]
}
```

Run the linter:

```bash
npx oxlint
# Type-aware:
npx oxlint --type-aware
```

You can override individual rules in your own `.oxlintrc.json`:

```json
{
  "extends": ["@cybozu/eslint-config/presets/react-typescript"],
  "rules": {
    "no-console": "error"
  }
}
```

## Available presets

| Preset | Use case | Plugins enabled |
| --- | --- | --- |
| `@cybozu/eslint-config/presets/base` | Plain JavaScript baseline (included in all other presets) | import, typescript |
| `@cybozu/eslint-config/presets/node` | Node.js code | import, node, typescript |
| `@cybozu/eslint-config/presets/typescript` | TypeScript (type-aware) | import, typescript |
| `@cybozu/eslint-config/presets/react` | React (JSX) | react, react-hooks, jsx-a11y, import, typescript |
| `@cybozu/eslint-config/presets/react-typescript` | React + TypeScript (type-aware) | react, react-hooks, jsx-a11y, import, typescript |
| `@cybozu/eslint-config/presets/es5` | Legacy ES5 code | typescript |
| `@cybozu/eslint-config/presets/kintone-customize` | kintone customize / plug-in development | import, typescript (+ kintone globals) |
| `@cybozu/eslint-config/presets/kintone-customize-es5` | kintone customize in ES5 | typescript (+ kintone globals) |

For the full rule list of each preset, run `pnpm run inventory` (this repo) and read `.rule-inventory/inventory.md`.

## Formatting

Use Oxfmt for code formatting:

```bash
npx oxfmt --check .
npx oxfmt .  # write
```

These presets intentionally **do not** include formatting rules so that Oxfmt (or your formatter of choice) is the single source of truth.

## CSS

CSS linting was removed in v26. Use [stylelint](https://stylelint.io/) for CSS.

## React notes

These presets target the [New JSX Transform](https://react.dev/blog/2020/09/22/introducing-the-new-jsx-transform). If you still rely on the classic transform (`React.createElement`), re-enable the relevant rules yourself.

## Migration from v25 (ESLint) → v26 (Oxlint)

v25 distributed ESLint flat-config builders. v26 distributes plain **`.oxlintrc.json`** files instead. Migration steps for consumers:

1. Replace `eslint` (and the various `eslint-plugin-*`) with `oxlint`:
   ```bash
   npm uninstall eslint eslint-plugin-* @typescript-eslint/*
   npm install --save-dev oxlint oxlint-tsgolint
   ```
2. Delete `eslint.config.mjs` and add `.oxlintrc.json`:
   ```json
   {
     "extends": ["@cybozu/eslint-config/presets/react-typescript"]
   }
   ```
3. Update your scripts:
   ```diff
   - "lint": "eslint ."
   + "lint": "oxlint"
   ```
4. Replace Prettier with Oxfmt (or keep Prettier — these presets no longer touch formatting):
   ```diff
   - "format": "prettier --check ."
   + "format": "oxfmt --check ."
   ```
5. Removed presets (no direct replacement — see the policy change in the table above):
   - `*-prettier` (formatting is handled by Oxfmt now)
   - `css-baseline` (use stylelint)

### Rule coverage caveat

Oxlint does not implement every ESLint rule. The `@oxlint/migrate` tool we used to generate these presets reports skipped rules per category (Nursery / Not Implemented / Unsupported). The dropped rules in this migration were primarily:

- Stylistic rules (now handled by Oxfmt)
- Legacy class-component-only React rules
- A handful of rules superseded by strict mode or TypeScript's `noImplicitThis`

See the per-commit migration output for the full list.

## Contributing

This repo uses **pnpm** as the package manager.

```bash
pnpm install
pnpm test           # vitest
pnpm typecheck      # tsc --noEmit
pnpm lint           # oxlint
pnpm format         # oxfmt --check .
```

Verification scripts:

- `tsx scripts/rule-inventory.ts` — generate `.rule-inventory/{inventory.json,inventory.md}` summarising every preset's enabled rules.
- `tsx scripts/diff-against-baseline.ts capture` — snapshot current rule sets.
- `tsx scripts/diff-against-baseline.ts check` — fail if any rule got removed or weakened relative to the captured baseline (useful when bumping `oxlint`).
