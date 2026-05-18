export type RuleSeverity = "off" | "warn" | "error";

export type RuleEntry = RuleSeverity | [RuleSeverity, ...unknown[]];

export interface OxlintEnv {
  builtin?: boolean;
  browser?: boolean;
  commonjs?: boolean;
  node?: boolean;
  mocha?: boolean;
  jquery?: boolean;
  [key: string]: boolean | undefined;
}

export interface OxlintOverride {
  files: string[];
  env?: OxlintEnv;
  globals?: Record<string, "readonly" | "writable" | "off">;
  rules?: Record<string, RuleEntry>;
  plugins?: string[];
  settings?: Record<string, unknown>;
}

export interface OxlintConfig {
  $schema?: string;
  plugins?: string[];
  categories?: Record<string, RuleSeverity>;
  options?: { typeAware?: boolean };
  env?: OxlintEnv;
  ignorePatterns?: string[];
  overrides?: OxlintOverride[];
  rules?: Record<string, RuleEntry>;
  settings?: Record<string, unknown>;
  globals?: Record<string, "readonly" | "writable" | "off">;
}

export const PRESET_NAMES = [
  "base",
  "es5",
  "kintone-customize",
  "kintone-customize-es5",
  "node",
  "react",
  "react-typescript",
  "typescript",
] as const;

export type PresetName = (typeof PRESET_NAMES)[number];
