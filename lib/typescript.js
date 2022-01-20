module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  // It's 5〜10x slower with the project setting.
  // So We disable it until the issue has been fixed
  /*
  parserOptions: {
    project: "./tsconfig.json"
  },
  */
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/unified-signatures": "warn",
    "@typescript-eslint/indent": ["warn", 2, { SwitchCase: 1 }],

    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-triple-slash-reference": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/prefer-namespace-keyword": "off",

    // These rules are required type information,
    // which means these can be checked without parserOptions.project
    // "@typescript-eslint/no-for-in-array": "error",
    // "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  },
};
