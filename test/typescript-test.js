const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("typescript", () => {
  it("should get expected errors and warninigs", () => {
    // We use react presets in order to support ES2017 syntax
    const result = runLintWithFixtures("typescript");
    assert.deepStrictEqual(result, {
      "ok.ts": {},
      "error.ts": {
        errors: ["@typescript-eslint/array-type"]
      },
      "warning.ts": {
        warnings: ["@typescript-eslint/no-useless-constructor"]
      }
    });
  });
});
