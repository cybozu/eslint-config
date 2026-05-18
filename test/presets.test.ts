import { describe, expect, it } from "vitest";
import { flattenRules, loadPreset, severityOf } from "./loadPreset.ts";
import { PRESET_NAMES } from "./types.ts";

describe.each(PRESET_NAMES)("preset %s", (name) => {
  it("loads as valid JSON with an overrides array", async () => {
    const config = await loadPreset(name);
    expect(Array.isArray(config.overrides)).toBe(true);
    expect(config.overrides?.length).toBeGreaterThan(0);
  });

  it("declares a files glob on every override", async () => {
    const config = await loadPreset(name);
    for (const override of config.overrides ?? []) {
      expect(override.files).toBeDefined();
      expect(override.files.length).toBeGreaterThan(0);
    }
  });

  it("has at least one enabled rule", async () => {
    const config = await loadPreset(name);
    const rules = flattenRules(config);
    const enabled = [...rules.values()].filter(
      (entry) => severityOf(entry) !== "off",
    );
    expect(enabled.length).toBeGreaterThan(0);
  });

  it("uses only valid severities (off | warn | error)", async () => {
    const config = await loadPreset(name);
    const rules = flattenRules(config);
    for (const [id, entry] of rules) {
      const severity = severityOf(entry);
      expect(
        ["off", "warn", "error"].includes(severity),
        `rule ${id} has invalid severity ${severity}`,
      ).toBe(true);
    }
  });
});

describe("kintone-customize preset", () => {
  it("declares kintone globals", async () => {
    const config = await loadPreset("kintone-customize");
    const globals = config.overrides?.[0]?.globals ?? {};
    expect(globals).toMatchObject({
      kintone: expect.any(String),
      moment: expect.any(String),
    });
  });
});

describe("typescript / react-typescript presets", () => {
  it.each(["typescript", "react-typescript"] as const)(
    "%s enables typeAware",
    async (name) => {
      const config = await loadPreset(name);
      expect(config.options?.typeAware).toBe(true);
    },
  );
});
