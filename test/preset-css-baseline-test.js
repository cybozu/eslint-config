import assert from "assert";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";
import cssBaseline from "../presets/css-baseline.js";

describe("flat preset css-baseline", () => {
  it("should get expected errors and warnings", async () => {
    const result = await runLintWithFixtures("css-baseline", cssBaseline);
    assert.deepStrictEqual(result, {
      "ok.css": {},
      "error.css": {
        errors: ["css/no-duplicate-imports"],
        warnings: ["css/use-baseline"],
      },
    });
  });
});
