import requireIdentifierPrefix from "./rules/require-identifier-prefix.js";
import strictDependencies from "./rules/strict-dependencies.js";

// Custom rules for developing kintone
/** @type {import('eslint').ESLint.Plugin} */
const kintonePlugin = {
  meta: {
    name: "@cybozu/eslint-config/plugins/kintone",
  },
  rules: {
    "require-identifier-prefix": requireIdentifierPrefix,
    "strict-dependencies": strictDependencies,
  },
};

export default kintonePlugin;
