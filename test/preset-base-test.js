import assert from "assert";
import basePreset from "../presets/base.js";
import { base } from "../lib/base.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat preset base", () => {
  it("should be able to use base as well as lib/base", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("base", base()),
      await runLintWithFixtures("base", basePreset),
    );
  });
});
