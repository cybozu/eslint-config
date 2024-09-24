module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@stylistic/ts"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
  ],
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
    // "@stylistic/ts/indent": ["warn", 2, { SwitchCase: 1 }],

    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-triple-slash-reference": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/prefer-interface": "off",

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    // These rules are required type information,
    // which means these can be checked without parserOptions.project
    // "@typescript-eslint/no-for-in-array": "error",
    // "@typescript-eslint/no-unnecessary-type-assertion": "warn",

    // These rules are temporarily set to maintain compatibility with v5.
    // To delete as appropriate when reviewing the adaptation rules again.
    // rules removed from `recommended` in v6
    "no-extra-semi": "off",
    "@stylistic/ts/no-extra-semi": "error",
    // rules moved to `strict` in v6
    "@typescript-eslint/no-non-null-assertion": "warn",
    // rules added to `recommended` in v6
    "@typescript-eslint/no-duplicate-enum-values": "off",
    "@typescript-eslint/no-unsafe-declaration-merging": "off",
    // `stylistic` rules not moved from v5 `recommended`
    "@typescript-eslint/ban-tslint-comment": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-generic-constructors": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-confusing-non-null-assertion": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "off",

    // added instead of `@typescript-eslint/ban-types` in v8
    "@typescript-eslint/no-empty-object-type": "error",
    "@typescript-eslint/no-unsafe-function-type": "error",
    "@typescript-eslint/no-wrapper-object-types": "error",

    // rules added to `recommended` in v8
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/prefer-namespace-keyword": "off",
  },
};
