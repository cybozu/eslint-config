import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { flattenRules, loadPreset, severityOf } from "../test/loadPreset.ts";
import { PRESET_NAMES, type PresetName, type RuleSeverity } from "../test/types.ts";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "..", ".rule-inventory");

interface PresetReport {
  preset: PresetName;
  totalRules: number;
  bySeverity: Record<RuleSeverity, number>;
  plugins: string[];
  typeAware: boolean;
  ruleIds: string[];
}

async function report(name: PresetName): Promise<PresetReport> {
  const config = await loadPreset(name);
  const rules = flattenRules(config);
  const bySeverity: Record<RuleSeverity, number> = { off: 0, warn: 0, error: 0 };
  const ruleIds: string[] = [];
  for (const [id, entry] of rules) {
    const sev = severityOf(entry);
    bySeverity[sev] += 1;
    if (sev !== "off") ruleIds.push(id);
  }
  ruleIds.sort();
  const pluginSet = new Set<string>(config.plugins ?? []);
  for (const ov of config.overrides ?? []) {
    for (const p of ov.plugins ?? []) pluginSet.add(p);
  }
  return {
    preset: name,
    totalRules: rules.size,
    bySeverity,
    plugins: [...pluginSet].sort(),
    typeAware: Boolean(config.options?.typeAware),
    ruleIds,
  };
}

async function main(): Promise<void> {
  await mkdir(outDir, { recursive: true });
  const reports: PresetReport[] = [];
  for (const name of PRESET_NAMES) {
    reports.push(await report(name));
  }

  await writeFile(
    join(outDir, "inventory.json"),
    JSON.stringify(reports, null, 2) + "\n",
  );

  const lines: string[] = [
    "# Oxlint preset rule inventory",
    "",
    "| preset | total | error | warn | plugins | type-aware |",
    "| ------ | ----: | ----: | ---: | ------- | :--------: |",
  ];
  for (const r of reports) {
    lines.push(
      `| ${r.preset} | ${r.totalRules} | ${r.bySeverity.error} | ${r.bySeverity.warn} | ${r.plugins.join(", ") || "-"} | ${r.typeAware ? "yes" : "no"} |`,
    );
  }
  lines.push("");
  for (const r of reports) {
    lines.push(`## ${r.preset}`, "", "<details><summary>enabled rules</summary>", "");
    lines.push("```");
    for (const id of r.ruleIds) lines.push(id);
    lines.push("```", "", "</details>", "");
  }
  await writeFile(join(outDir, "inventory.md"), lines.join("\n"));

  console.log(`Wrote ${reports.length} preset reports to ${outDir}`);
}

await main();
