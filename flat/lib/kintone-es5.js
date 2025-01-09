const globals = require("globals");
const kintoneGlobals = require("../globals/kintone");

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function kintoneEs5() {
  return [
    {
      languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",
        globals: {
          ...globals.browser,
          ...kintoneGlobals,
        },
      },
      rules: {
        strict: ["error", "function"],
      },
    },
  ];
};
