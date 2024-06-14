const assert = require("assert");
const reactTypescript = require("../../flat/presets/react-typescript");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat preset react-typescript", () => {
  it("should get expected errors and warnings", async () => {
    // We use react presets in order to support ES2017 syntax
    const result = await runLintWithFixturesFlat(
      "react-typescript",
      reactTypescript,
    );
    assert.deepStrictEqual(result, {
      "ok.tsx": {},
      "error.tsx": {
        errors: [
          "@typescript-eslint/array-type",
          "@typescript-eslint/no-shadow",
        ],
      },
      "warning.tsx": {
        warnings: [
          "@typescript-eslint/no-useless-constructor",
          "@typescript-eslint/no-non-null-assertion",
        ],
      },
    });
  });
});
