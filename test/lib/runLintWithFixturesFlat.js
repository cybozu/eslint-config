"use strict";

const { loadESLint } = require("eslint");
const path = require("path");

/**
 * Run ESlint and return the result per files
 * @param type lint type, which is in lib directory
 * @param configObject { import("eslint").Linter.FlatConfig[] }
 * @returns {Object} lint results {[fileName]: {errors: [ruleNames], warnings: [ruleNames]}}
 */
const runLintWithFixturesFlat = async (type, configObject) => {
  const FlatESLint = await loadESLint({ useFlatConfig: true });

  const eslint = new FlatESLint({
    overrideConfigFile: true,
    overrideConfig: configObject,
    ignore: false,
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

module.exports = runLintWithFixturesFlat;
