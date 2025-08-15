const base = require("../lib/base.js");
const react = require("../lib/react.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...base(), ...react()],
  ["**/*.{js,cjs,mjs,jsx}"],
);
