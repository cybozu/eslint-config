module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-for-in-array": "error",
    // "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-useless-constructor": "warn",
    // "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/unified-signatures": "warn",
    // remove them later
    "@typescript-eslint/indent": ["error", 2],
    "no-undef": "off",
    "@typescript-eslint/explicit-member-accessibility": "off"
  }
};
