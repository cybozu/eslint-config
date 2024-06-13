const assert = require("assert");
const kintone = require("../../flat/lib/kintone");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat kintone", () => {
  it("should get expected errors and warnings with kintone config", async () => {
    const result = await runLintWithFixturesFlat("kintone", kintone());
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["strict", "strict"],
      },
      "ok.js": {},
    });
  });
  it("should be able to use kintone-customize-es5 as well as lib/kintone", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("globals-kintone", kintone()),
      {
        "ok.js": {},
        "error.js": {
          errors: ["no-undef"],
        },
      },
    );
  });
});
