const nodePlugin = require("eslint-plugin-n");

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function node() {
  return [
    nodePlugin.configs["flat/recommended"],
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
