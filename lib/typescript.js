module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/array-type": ["error", "array-simple"],
    "@typescript-eslint/no-for-in-array": "error",

    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/unified-signatures": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/indent": ["warn", 2, { SwitchCase: 1 }],

    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    // FIXME use NonNullable<T> instead
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-triple-slash-reference": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/prefer-namespace-keyword": "off"
  }
};
