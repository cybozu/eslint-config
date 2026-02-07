import assert from "assert";
import reactPrettier from "../presets/react-prettier.js";
import { prettier } from "../lib/prettier.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat preset react-prettier", () => {
  it("should be able to use react-prettier as well as lib/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("prettier", prettier()),
      await runLintWithFixtures("prettier", reactPrettier),
    );
  });
});
