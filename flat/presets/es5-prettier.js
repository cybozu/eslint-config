const es5 = require("../lib/es5.js");
const prettier = require("../lib/prettier.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [...es5(), ...prettier()];
