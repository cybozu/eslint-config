const base = require("../lib/base.js");
const node = require("../lib/node.js");
const prettier = require("../lib/prettier.js");
const typescript = require("../lib/typescript.js");
const nodeTypescript = require("../lib/node-typescript.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...base(), ...node(), ...typescript(), ...nodeTypescript(), ...prettier()],
  ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],
);
