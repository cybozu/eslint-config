const assert = require("assert");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");
const cssBaseline = require("../../flat/presets/css-baseline");

describe("flat preset css-baseline", () => {
  it("should get expected errors and warnings", async () => {
    const result = await runLintWithFixturesFlat("css-baseline", cssBaseline);
    assert.deepStrictEqual(result, {
      "ok.css": {},
      "error.css": {
        errors: ["css/no-duplicate-imports"],
        warnings: ["css/use-baseline"],
      },
    });
  });
});
