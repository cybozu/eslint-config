import assert from "assert";
import reactTypescriptPrettier from "../presets/react-typescript-prettier.js";
import { prettier } from "../lib/prettier.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat preset react-typescript-prettier", () => {
  it("should be able to use react-typescript-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("prettier"),
      await runLintWithFixtures("prettier", reactTypescriptPrettier),
    );
  });
});
