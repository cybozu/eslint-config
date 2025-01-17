const base = require("../lib/base.js");
const kintoneGlobals = require("../globals/kintone.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
  {
    languageOptions: {
      globals: {
        ...kintoneGlobals,
      },
    },
  },
  ...base(),
];
