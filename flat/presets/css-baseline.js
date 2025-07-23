const cssBaseline = require("../lib/css-baseline.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [{ files: ["**/*.css"] }, ...cssBaseline()];
