import assert from "assert";
import typescriptPrettier from "../presets/typescript-prettier.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";
import { prettier } from "../lib/prettier.js";

describe("flat preset typescript-prettier", () => {
  it("should be able to use typescript-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("prettier", prettier()),
      await runLintWithFixtures("prettier", typescriptPrettier),
    );
  });
});
