const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("base", () => {
  it("should get expected errors and warninigs with base config", async () => {
    const result = await runLintWithFixtures("base");
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: [
          "no-var",
          "no-unused-vars",
          "getter-return",
          "no-self-assign",
          "no-import-assign",
          "require-atomic-updates",
          "no-async-promise-executor",
          "default-param-last",
          "prefer-regex-literals",
        ],
        warnings: ["no-useless-return"],
      },
      "warning.js": {
        warnings: [
          "import-x/no-duplicates",
          "import-x/no-duplicates",
          "array-callback-return",
          "max-params",
          "max-nested-callbacks",
        ],
      },
      "ok.js": {},
    });
  });
});
