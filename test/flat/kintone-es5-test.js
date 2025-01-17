const assert = require("assert");
const kintoneEs5 = require("../../flat/lib/kintone-es5");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat kintone-es5", () => {
  it("should get expected errors and warnings with kintone-es5 config", async () => {
    const result = await runLintWithFixturesFlat("kintone", kintoneEs5());
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["strict", "strict"],
      },
      "ok.js": {},
    });
  });
  it("should be able to use kintone-customize-es5 as well as lib/kintone-es5", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("globals-kintone", kintoneEs5()),
      {
        "ok.js": {},
        "error.js": {
          errors: ["no-undef"],
        },
      }
    );
  });
});
