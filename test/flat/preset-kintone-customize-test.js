const assert = require("assert");
const kintoneCustomize = require("../../flat/presets/kintone-customize");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat preset kintone-customize", () => {
  it("should get expected errors and warninigs with kintone globals", async () => {
    const result = await runLintWithFixturesFlat(
      "globals-kintone",
      kintoneCustomize
    );
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["no-undef"],
        warnings: ["spaced-comment"],
      },
      "ok.js": {
        warnings: ["spaced-comment"],
      },
    });
  });
});
