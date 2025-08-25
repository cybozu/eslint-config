const base = require("../lib/base.js");
const node = require("../lib/node.js");
const prettier = require("../lib/prettier.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...base(), ...node(), ...prettier()],
  ["**/*.{js,cjs,mjs,ts,tsx,jsx,mts,cts}"],
);
