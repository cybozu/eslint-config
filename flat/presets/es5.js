const es5 = require("../lib/es5.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...es5()],
  ["**/*.{js,cjs,ts,cts,jsx,tsx}"],
);
