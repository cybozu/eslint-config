const assert = require("assert");
const reactTypescriptPrettier = require("../../flat/presets/react-typescript-prettier");
const prettier = require("../../flat/lib/prettier");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat preset react-typescript-prettier", () => {
  it("should be able to use react-typescript-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("prettier"),
      await runLintWithFixturesFlat("prettier", reactTypescriptPrettier),
    );
  });
});
