const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("react-typescript", () => {
  it("should get expected errors and warninigs", async () => {
    // We use react presets in order to support ES2017 syntax
    const result = await runLintWithFixtures(
      "react-typescript",
      "presets/react-typescript.js"
    );
    assert.deepStrictEqual(result, {
      "ok.tsx": {},
      "error.tsx": {
        errors: ["@typescript-eslint/array-type"],
      },
      "warning.tsx": {
        warnings: ["@typescript-eslint/no-useless-constructor"],
      },
    });
  });
});
