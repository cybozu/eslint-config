const base = require("../lib/base.js");
const react = require("../lib/react.js");
const typescript = require("../lib/typescript.js");
const reactTypescript = require("../lib/react-typescript.js");
const prettier = require("../lib/prettier.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
  { files: ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"] },
  ...base(),
  ...react(),
  ...reactTypescript(),
  ...typescript(),
  ...prettier(),
];
