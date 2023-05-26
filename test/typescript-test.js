const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("typescript", () => {
  it("should get expected errors and warninigs", async () => {
    // We use react presets in order to support ES2017 syntax
    const result = await runLintWithFixtures("typescript");
    assert.deepStrictEqual(result, {
      "ok.ts": {},
      "error.ts": {
        errors: [
          "@typescript-eslint/array-type",
          "@typescript-eslint/no-shadow",
        ],
      },
      "warning.ts": {
        warnings: [
          "@typescript-eslint/no-useless-constructor",
          "@typescript-eslint/no-non-null-assertion",
        ],
      },
    });
  });
});
