import assert from "assert";
import typescript from "../presets/typescript.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat preset typescript", () => {
  it("should get expected errors and warnings", async () => {
    // We use react presets in order to support ES2017 syntax
    const result = await runLintWithFixtures("typescript", typescript);
    assert.deepStrictEqual(result, {
      "ok.ts": {},
      "error.ts": {
        errors: [
          "@typescript-eslint/array-type",
          "@typescript-eslint/no-shadow",
        ],
      },
      "warning.ts": {
        warnings: [
          "@typescript-eslint/no-useless-constructor",
          "@typescript-eslint/no-non-null-assertion",
        ],
      },
    });
  });
});
