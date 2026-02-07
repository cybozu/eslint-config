import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";
import stylisticTs from "@stylistic/eslint-plugin-ts";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const prettier = () => {
  return [
    eslintPluginPrettierRecommended,
    eslintConfigPrettier,
    {
      plugins: {
        "@stylistic/ts": stylisticTs,
      },
      // Disable rules that conflict with Prettier
      // - Previously disabled with eslint-config-prettier,
      // - but @stylistic is not supported, so disable it additionally
      rules: {
        "@stylistic/ts/no-extra-semi": "off",
        "@stylistic/ts/indent": "off",
      },
    },
  ];
};
