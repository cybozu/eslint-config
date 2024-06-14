const assert = require("assert");
const typescriptPrettier = require("../../flat/presets/typescript-prettier");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");
const prettier = require("../../flat/lib/prettier");

describe("flat preset typescript-prettier", () => {
  it("should be able to use typescript-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("prettier", prettier()),
      await runLintWithFixturesFlat("prettier", typescriptPrettier),
    );
  });
});
