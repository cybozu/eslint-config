const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("base", () => {
  it("should get expected errors and warninigs with base config", () => {
    const result = runLintWithFixtures("base");
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: [
          "no-var",
          "no-unused-vars",
          "no-var",
          "no-redeclare",
          "getter-return",
          "no-self-assign"
        ],
        warnings: ["no-useless-return"]
      },
      "warning.js": {
        warnings: [
          "import/no-duplicates",
          "import/no-duplicates",
          "array-callback-return"
        ]
      },
      "ok.js": {}
    });
  });
});
