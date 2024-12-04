const assert = require("assert");
const basePreset = require("../../flat/presets/base");
const base = require("../../flat/lib/base");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat preset base", () => {
  it("should be able to use base as well as lib/base", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("base", base()),
      await runLintWithFixturesFlat("base", basePreset)
    );
  });
});
