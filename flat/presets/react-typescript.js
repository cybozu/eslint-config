const base = require("../lib/base.js");
const react = require("../lib/react.js");
const typescript = require("../lib/typescript.js");
const reactTypescript = require("../lib/react-typescript.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...base(), ...react(), ...reactTypescript(), ...typescript()],
  ["**/*.{js,cjs,mjs,ts,cts,mts,tsx,jsx}"],
);
