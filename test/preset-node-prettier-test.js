import assert from "assert";
import nodePrettier from "../presets/node-prettier.js";
import { prettier } from "../lib/prettier.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat preset node-prettier", () => {
  it("should be able to use node-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("prettier", prettier()),
      await runLintWithFixtures("prettier", nodePrettier),
    );
  });
});
