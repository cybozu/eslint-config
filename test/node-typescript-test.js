import assert from "assert";
import nodeTypescriptPrettier from "../presets/node-typescript-prettier.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat node-typescript", () => {
  it("should get expected errors and warnings", async () => {
    const result = await runLintWithFixtures(
      "node-typescript",
      nodeTypescriptPrettier,
    );
    assert.deepStrictEqual(result, {
      "ok.ts": {},
      "sum.ts": {},
      "error.ts": {
        errors: ["n/no-missing-import"],
      },
    });
  });
});
