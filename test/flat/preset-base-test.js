const assert = require("assert");
const basePreset = require("../../flat/presets/react-prettier");
const base = require("../../flat/lib/prettier");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat preset react-prettier", () => {
  it("should be able to use react-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("prettier", base()),
      await runLintWithFixturesFlat("prettier", basePreset)
    );
  });
});
