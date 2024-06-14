const assert = require("assert");
const nodeTypescriptPrettier = require("../../flat/presets/node-typescript-prettier");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat node-typescript", () => {
  it("should get expected errors and warnings", async () => {
    const result = await runLintWithFixturesFlat(
      "node-typescript",
      nodeTypescriptPrettier,
    );
    assert.deepStrictEqual(result, {
      "ok.ts": {},
      "sum.ts": {},
      "error.ts": {
        errors: ["n/no-missing-import"],
      },
    });
  });
});
