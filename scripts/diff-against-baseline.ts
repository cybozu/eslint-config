/**
 * Compares the current Oxlint preset rule set against a frozen baseline
 * captured before/after a migration step. Fails (exit 1) if any previously
 * enabled rule has been removed or had its severity weakened.
 *
 * Usage:
 *   tsx scripts/diff-against-baseline.ts capture   # write baseline
 *   tsx scripts/diff-against-baseline.ts check     # diff against baseline
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { flattenRules, loadPreset, severityOf } from "../test/loadPreset.ts";
import { PRESET_NAMES, type PresetName, type RuleSeverity } from "../test/types.ts";

const here = dirname(fileURLToPath(import.meta.url));
const baselinePath = join(here, "..", ".rule-inventory", "baseline.json");

type Snapshot = Record<PresetName, Record<string, RuleSeverity>>;

async function snapshot(): Promise<Snapshot> {
  const result = {} as Snapshot;
  for (const name of PRESET_NAMES) {
    const config = await loadPreset(name);
    const rules = flattenRules(config);
    const entry: Record<string, RuleSeverity> = {};
    for (const [id, value] of rules) {
      entry[id] = severityOf(value);
    }
    result[name] = entry;
  }
  return result;
}

const severityRank: Record<RuleSeverity, number> = { off: 0, warn: 1, error: 2 };

async function capture(): Promise<void> {
  await mkdir(dirname(baselinePath), { recursive: true });
  const snap = await snapshot();
  await writeFile(baselinePath, JSON.stringify(snap, null, 2) + "\n");
  console.log(`Baseline captured at ${baselinePath}`);
}

async function check(): Promise<void> {
  if (!existsSync(baselinePath)) {
    console.error(`No baseline at ${baselinePath}. Run 'capture' first.`);
    process.exit(2);
  }
  const baseline = JSON.parse(await readFile(baselinePath, "utf8")) as Snapshot;
  const current = await snapshot();
  let regressions = 0;

  for (const name of PRESET_NAMES) {
    const before = baseline[name] ?? {};
    const after = current[name] ?? {};
    const ids = new Set([...Object.keys(before), ...Object.keys(after)]);
    for (const id of ids) {
      const bSev = before[id] ?? "off";
      const aSev = after[id] ?? "off";
      if (severityRank[aSev] < severityRank[bSev]) {
        console.error(
          `regress: ${name}: ${id} ${bSev} -> ${aSev}`,
        );
        regressions += 1;
      }
    }
  }

  if (regressions > 0) {
    console.error(`\n${regressions} regression(s) found.`);
    process.exit(1);
  }
  console.log("No regressions vs baseline.");
}

const cmd = process.argv[2];
if (cmd === "capture") await capture();
else if (cmd === "check") await check();
else {
  console.error("Usage: tsx scripts/diff-against-baseline.ts <capture|check>");
  process.exit(2);
}
