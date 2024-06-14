const base = require("../lib/base.js");
const prettier = require("../lib/prettier.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [...base(), ...prettier()];
