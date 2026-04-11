import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const typescript = () => {
  return [
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    {
      plugins: {
        "@typescript-eslint": tseslint.plugin,
        "@stylistic": stylistic,
      },
      languageOptions: {
        parser: tseslint.parser,
        // It's 5〜10x slower with the project setting.
        // So We disable it until the issue has been fixed
        /*
        parserOptions: {
          project: true,
        },
        */
      },
      rules: {
        //
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/unified-signatures": "warn",

        //
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-triple-slash-reference": "off",
        "@typescript-eslint/no-unused-vars": "off",

        // -----
        // Syntactic Plugin
        // -----
        "@stylistic/no-extra-semi": "error",

        // These rules are temporarily set to maintain compatibility with v5.
        // To delete as appropriate when reviewing the adaptation rules again.
        // rules removed from `recommended` in v6

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

        // rules added to `recommended` in v8
        "@typescript-eslint/no-require-imports": "off",
        "no-unused-expressions": "error",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/prefer-namespace-keyword": "off",
      },
    },
  ];
};
