import nodePlugin from "eslint-plugin-n";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const node = () => {
  return [
    nodePlugin.configs["flat/recommended-script"],
    {
      settings: {
        n: {
          // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/shared-settings.md#tryextensions
          tryExtensions: [".js", ".json", ".node", ".ts", ".jsx", ".tsx"],
        },
      },
      rules: {
        "no-console": "off",
      },
      languageOptions: {
        ecmaVersion: "latest",
      },
    },
  ];
};
