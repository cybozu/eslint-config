const assert = require("assert");
const nodePrettier = require("../../flat/presets/node-prettier");
const prettier = require("../../flat/lib/prettier");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat preset node-prettier", () => {
  it("should be able to use node-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("prettier", prettier()),
      await runLintWithFixturesFlat("prettier", nodePrettier),
    );
  });
});
