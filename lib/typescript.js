import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

/**
 * @return { import("eslint").Linter.Config[] }
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
        // =======
        // error
        // =======
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        // extension rules
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            vars: "local",
            args: "none",
          },
        ],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],

        // =======
        // warn
        // =======
        "@typescript-eslint/unified-signatures": "warn",
        "@typescript-eslint/no-non-null-assertion": "warn",
        // extension rules
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",

        // =======
        // off
        // =======
        // in recommended
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-triple-slash-reference": "off",
        "@typescript-eslint/no-require-imports": "off",
        // in stylistic
        "@typescript-eslint/class-literal-property-style": "off",
        "@typescript-eslint/consistent-generic-constructors": "off",
        "@typescript-eslint/consistent-indexed-object-style": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/prefer-for-of": "off",

        // -----
        // Syntactic Plugin
        // -----
        "@stylistic/no-extra-semi": "error",
      },
    },
  ];
};
