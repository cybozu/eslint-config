const base = require("../lib/base.js");
const react = require("../lib/react.js");
const typescript = require("../lib/typescript.js");
const reactTypescript = require("../lib/react-typescript.js");
const prettier = require("../lib/prettier.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [
  ...base(),
  ...react({ files: ["**/*.{jsx,tsx}"] }),
  ...reactTypescript(),
  ...typescript({ files: ["**/*.{ts,cts,mts,tsx}"] }),
  ...prettier(),
];
