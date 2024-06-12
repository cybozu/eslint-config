const assert = require("assert");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");
const prettier = require("../../flat/presets/prettier");

describe("flat prettier", () => {
  it("should get expected errors and warnings", async () => {
    const result = await runLintWithFixturesFlat("prettier", prettier);
    assert.deepStrictEqual(result, {
      "ok.js": {},
      "error.js": {
        errors: ["prettier/prettier"],
      },
    });
  });
});
