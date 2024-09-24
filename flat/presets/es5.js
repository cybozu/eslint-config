const es5 = require("../lib/es5.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [...es5()];
