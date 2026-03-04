import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";
import stylistic from "@stylistic/eslint-plugin";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const prettier = () => {
  return [
    eslintPluginPrettierRecommended,
    eslintConfigPrettier,
    {
      plugins: {
        "@stylistic": stylistic,
      },
      // Disable rules that conflict with Prettier
      // - Previously disabled with eslint-config-prettier,
      // - but @stylistic is not supported, so disable it additionally
      rules: {
        "@stylistic/no-extra-semi": "off",
        "@stylistic/indent": "off",
      },
    },
  ];
};
