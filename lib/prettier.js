import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * @return { import("eslint").Linter.Config[] }
 */
export const prettier = () => {
  return [
    eslintPluginPrettierRecommended,
    // eslint-config-prettier also disables conflicting @stylistic/* rules
    eslintConfigPrettier,
  ];
};
