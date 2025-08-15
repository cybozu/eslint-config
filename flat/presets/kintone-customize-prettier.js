const kintone = require("../lib/kintone.js");
const prettier = require("../lib/prettier.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...kintone(), ...prettier()],
  ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
);
