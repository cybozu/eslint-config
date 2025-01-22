const assert = require("assert");
const kintoneCustomizePrettier = require("../../flat/presets/kintone-customize-prettier");
const prettier = require("../../flat/presets/prettier");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat preset kintone-customize-prettier", () => {
  it("should be able to use kintone-customize as well as preset/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("prettier", prettier),
      await runLintWithFixturesFlat("prettier", kintoneCustomizePrettier)
    );
  });
});
