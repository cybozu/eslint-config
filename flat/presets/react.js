const base = require("../lib/base.js");
const react = require("../lib/react.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [{ files: ["**/*.{js,cjs,mjs,jsx}"] }, ...base(), ...react()];
