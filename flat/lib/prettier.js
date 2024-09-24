const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const eslintConfigPrettier = require("eslint-config-prettier");
const stylisticTs = require("@stylistic/eslint-plugin-ts");

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function prettier() {
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
