"use strict";

const { loadESLint } = require("eslint");
const path = require("path");

/**
 * Run ESlint and return the result per files
 * @param type lint type, which is in lib directory
 * @returns {Object} lint results {[fileName]: {errors: [ruleNames], warnings: [ruleNames]}}
 */
const runLintWithFixtures = async (type, configFile = `lib/${type}.js`) => {
  const ESLint = await loadESLint({ useFlatConfig: false });
  const eslint = new ESLint({
    overrideConfigFile: path.resolve(process.cwd(), configFile),
    ignore: false,
    useEslintrc: false,
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  });
  const targetDir = path.resolve(__dirname, "..", "fixtures", type);
  const lintResult = await eslint.lintFiles([targetDir]);
  // console.log(JSON.stringify(lintResult, null, 2));
  return lintResult.reduce((results, { filePath, messages }) => {
    // strip path
    const fileName = filePath.replace(`${targetDir}/`, "");
    return Object.assign(results, {
      [fileName]: messages.reduce((acc, { severity, ruleId }) => {
        const resultPerFile = acc;
        switch (severity) {
          // warning
          case 1:
            if (typeof resultPerFile.warnings === "undefined") {
              resultPerFile.warnings = [];
            }
            resultPerFile.warnings.push(ruleId);
            break;
          // errors
          case 2:
            if (typeof resultPerFile.errors === "undefined") {
              resultPerFile.errors = [];
            }
            resultPerFile.errors.push(ruleId);
            break;
          default:
            throw new Error(`Got an unknown severity: ${severity}(${ruleId})`);
        }
        return resultPerFile;
      }, {}),
    });
  }, {});
};

module.exports = runLintWithFixtures;
