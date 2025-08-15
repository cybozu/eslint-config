const es5 = require("../lib/es5.js");
const prettier = require("../lib/prettier.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...es5(), ...prettier()],
  ["**/*.{js,cjs,ts,cts,jsx,tsx}"],
);
