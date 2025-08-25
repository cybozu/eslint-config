const base = require("../lib/base.js");
const node = require("../lib/node.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...base(), ...node()],
  ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
);
