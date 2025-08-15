const cssBaseline = require("../lib/css-baseline.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig([...cssBaseline()], ["**/*.css"]);
