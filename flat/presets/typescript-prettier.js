const base = require("../lib/base.js");
const prettier = require("../lib/prettier.js");
const typescript = require("../lib/typescript.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...base(), ...typescript(), ...prettier()],
  ["**/*.{js,cjs,mjs,ts,cts,mts}"],
);
