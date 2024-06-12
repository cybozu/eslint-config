const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function prettier() {
  return [eslintPluginPrettierRecommended];
};
