const globals = require("globals");
const kintoneGlobals = require("../globals/kintone");

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function kintone() {
  return [
    {
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "script",
        globals: {
          ...globals.browser,
          ...kintoneGlobals,
        },
      },
    },
  ];
};
