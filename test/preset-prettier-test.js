import assert from "assert";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";
import prettier from "../presets/prettier.js";

describe("flat preset prettier", () => {
  it("should get expected errors and warnings", async () => {
    const result = await runLintWithFixtures("prettier", prettier);
    assert.deepStrictEqual(result, {
      "ok.js": {},
      "error.js": {
        errors: ["prettier/prettier"],
      },
    });
  });
});
