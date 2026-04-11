import assert from "assert";
import nodeTypescriptPrettier from "../presets/node-typescript-prettier.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";
import { prettier } from "../lib/prettier.js";

describe("flat preset node-typescript-prettier", () => {
  it("should be able to use node-typescript-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("prettier", prettier()),
      await runLintWithFixtures("prettier", nodeTypescriptPrettier),
    );
  });
});
