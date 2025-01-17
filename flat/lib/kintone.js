const globals = require("globals");
const kintoneGlobals = require("../globals/kintone");
const base = require("../lib/base.js");

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function kintone() {
  return base({
    overrideGlobals: {
      ...globals.browser,
      ...globals.es2024,
      ...kintoneGlobals,
    },
  });
};
