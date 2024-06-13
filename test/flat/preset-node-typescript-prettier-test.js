const assert = require("assert");
const nodeTypescriptPrettier = require("../../flat/presets/node-typescript-prettier");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");
const prettier = require("../../flat/lib/prettier");

describe("flat preset node-typescript-prettier", () => {
  it("should be able to use node-typescript-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("prettier", prettier()),
      await runLintWithFixturesFlat("prettier", nodeTypescriptPrettier),
    );
  });
});
