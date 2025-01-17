const base = require("../lib/base.js");
const kintone = require("../lib/kintone.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [...kintone(), ...base()];
