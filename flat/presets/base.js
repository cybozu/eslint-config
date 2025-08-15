const base = require("../lib/base.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...base()],
  ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
);
