const assert = require("assert");
const es5 = require("../../flat/lib/es5");
const kintoneEs5 = require("../../flat/presets/kintone-customize-es5");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat preset kintone-customize-es5", () => {
  it("should be able to use kintone-customize-es5 as well as lib/es5 and lib/kintone", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("es5", es5()),
      await runLintWithFixturesFlat("es5", kintoneEs5),
    );
  });
});
