import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import type { OxlintConfig, PresetName, RuleEntry, RuleSeverity } from "./types.ts";

const here = dirname(fileURLToPath(import.meta.url));
const presetsDir = join(here, "..", "presets");

export async function loadPreset(name: PresetName): Promise<OxlintConfig> {
  const path = join(presetsDir, `${name}.oxlintrc.json`);
  const raw = await readFile(path, "utf8");
  return JSON.parse(raw) as OxlintConfig;
}

export function flattenRules(config: OxlintConfig): Map<string, RuleEntry> {
  const rules = new Map<string, RuleEntry>();
  for (const [id, entry] of Object.entries(config.rules ?? {})) {
    rules.set(id, entry);
  }
  for (const override of config.overrides ?? []) {
    for (const [id, entry] of Object.entries(override.rules ?? {})) {
      rules.set(id, entry);
    }
  }
  return rules;
}

export function severityOf(entry: RuleEntry): RuleSeverity {
  return Array.isArray(entry) ? entry[0] : entry;
}
