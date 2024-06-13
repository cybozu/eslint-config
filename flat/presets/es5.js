const es5 = require("../lib/es5.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [...es5()];
