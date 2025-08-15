const base = require("../lib/base.js");
const react = require("../lib/react.js");
const prettier = require("../lib/prettier.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...base(), ...react(), ...prettier()],
  ["**/*.{js,mjs,cjs,jsx}"],
);
