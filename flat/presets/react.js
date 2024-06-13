const base = require("../lib/base.js");
const react = require("../lib/react.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [...base(), ...react({ files: ["**/*.jsx"] })];
