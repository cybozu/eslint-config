const base = require("./base");

const baseRules = base.rules;
// This rule can be parsed with ES5
delete baseRules["import/no-duplicates"];

module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script",
  },
  env: {
    browser: true,
    commonjs: true,
  },
  rules: Object.assign({}, baseRules, {
    // Disable all rules about ES6
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "constructor-super": "off",
    "generator-star-spacing": "off",
    "no-class-assign": "off",
    "no-confusing-arrow": "off",
    "no-const-assign": "off",
    "no-dupe-class-members": "off",
    "no-duplicate-imports": "off",
    "no-new-symbol": "off",
    "no-restricted-imports": "off",
    "no-this-before-super": "off",
    "no-useless-computed-key": "off",
    "no-useless-constructor": "off",
    "no-useless-rename": "off",
    "no-var": "off",
    "object-shorthand": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "off",
    "prefer-reflect": "off",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "prefer-template": "off",
    "require-yield": "off",
    "rest-spread-spacing": "off",
    "sort-imports": "off",
    "symbol-description": "off",
    "template-curly-spacing": "off",
    "yield-star-spacing": "off",
  }),
};
