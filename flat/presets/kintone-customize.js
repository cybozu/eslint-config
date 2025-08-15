const kintone = require("../lib/kintone.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...kintone()],
  ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
);
