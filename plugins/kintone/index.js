import requireIdentifierPrefix from "./rules/require-identifier-prefix.js";

// Custom rules for developing kintone
/** @type {import('eslint').ESLint.Plugin} */
const kintonePlugin = {
  rules: {
    "require-identifier-prefix": requireIdentifierPrefix,
  },
};

export default kintonePlugin;
