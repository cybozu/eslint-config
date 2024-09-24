const es5 = require("../lib/es5.js");
const kintone = require("../lib/kintone.js");
const kintoneGlobals = require("../globals/kintone.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [...es5(kintoneGlobals), ...kintone()];
