// Restricts which files can import a module.
//
// Ported from eslint-plugin-strict-dependencies 1.3.35
// (https://github.com/knowledge-work/eslint-plugin-strict-dependencies),
// which calls `context.getFilename()` removed in ESLint 10.
// It also includes an unreleased upstream fix for `paths` without `baseUrl`
// (https://github.com/knowledge-work/eslint-plugin-strict-dependencies/pull/198).
// The options and the behavior are kept compatible so that the rule can replace
// the original one by only changing the plugin and the rule name.
//
// MIT License
//
// Copyright (c) 2021 Knowledge Work
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import path from "node:path";
import isGlob from "is-glob";
import micromatch from "micromatch";
import ts from "typescript";

/**
 * Converts a path to a POSIX-style path without duplicate or trailing slashes.
 * @param {string} filePath
 * @returns {string}
 */
const normalizePath = (filePath) => {
  const normalized = filePath.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
  return normalized.length > 1 ? normalized.replace(/\/$/, "") : normalized;
};

/**
 * Matches a glob pattern, or a prefix if the pattern is not a glob.
 * `is-glob` is used as in the original rule, since `micromatch.scan().isGlob`
 * differs from it for patterns such as `!src/foo.ts`, `src/a{b}` and `src/a?`.
 * @param {string} str
 * @param {string} pattern
 * @returns {boolean}
 */
const isMatch = (str, pattern) =>
  isGlob(pattern) ? micromatch.isMatch(str, pattern) : str.startsWith(pattern);

/**
 * Reads `compilerOptions.paths` of `tsconfig.json` in `cwd` and returns a map
 * from an import alias to the path it points to.
 * Like the original rule, `extends` is not followed, and a missing or broken
 * `tsconfig.json` is treated as having no aliases.
 * @param {string} cwd
 * @param {Record<string, number>} pathIndexMap
 * @returns {Record<string, string>}
 */
const readImportAliasMap = (cwd, pathIndexMap) => {
  /** @type {Record<string, string>} */
  const importAliasMap = {};
  // `readConfigFile` does not validate the values, so invalid values such as
  // `"paths": { "@/*": [null] }` can throw. Like the original rule, ignore them
  // instead of aborting the lint.
  try {
    const { config } = ts.readConfigFile(
      path.join(cwd, "tsconfig.json"),
      ts.sys.readFile,
    );
    const compilerOptions = config?.compilerOptions;
    if (!compilerOptions?.paths) return importAliasMap;
    for (const [alias, paths] of Object.entries(compilerOptions.paths)) {
      if (!Array.isArray(paths) || paths.length === 0) continue;
      // Use the first path unless `pathIndexMap` specifies an existing index
      const pathValue = paths[pathIndexMap[alias] ?? 0] ?? paths[0];
      // Without `baseUrl`, `paths` are relative to `tsconfig.json` and start with `./`
      // (TypeScript 7 removed `baseUrl`). `path.join` drops the leading `./` so that
      // the resolved path matches `module` written without it.
      importAliasMap[alias] = path.join(
        compilerOptions.baseUrl || ".",
        pathValue,
      );
    }
  } catch {
    return {};
  }
  return importAliasMap;
};

/**
 * Resolves an import path to a path relative to `cwd`.
 * Like the original rule, aliases are replaced as strings and files are not
 * looked up, so an extension or `index` is not complemented.
 * @param {string} importPath
 * @param {string | null} relativeFilePath The importing file, set only when `resolveRelativeImport` is enabled
 * @param {Record<string, string>} importAliasMap
 * @returns {string}
 */
const resolveImportPath = (importPath, relativeFilePath, importAliasMap) => {
  let resolved = importPath;
  if (
    relativeFilePath &&
    (resolved.startsWith("./") || resolved.startsWith("../"))
  ) {
    resolved = path.join(path.dirname(relativeFilePath), resolved);
  }
  for (const [alias, aliasPath] of Object.entries(importAliasMap)) {
    resolved = resolved.replace(
      alias.replace("*", ""),
      aliasPath.replace("*", ""),
    );
  }
  return normalizePath(resolved);
};

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Restrict which files can import a module",
    },
    messages: {
      notAllowed: "import '{{importPath}}' is not allowed from {{filePath}}.",
      notAllowedMembers:
        "import specifier '{{members}}' is not allowed from {{filePath}}.",
    },
    schema: [
      {
        type: "array",
        items: {
          type: "object",
          properties: {
            module: { type: "string" },
            allowReferenceFrom: {
              type: "array",
              items: { type: "string" },
            },
            allowSameModule: { type: "boolean" },
            excludeTypeImportChecks: { type: "boolean" },
            targetMembers: {
              type: "array",
              items: { type: "string" },
            },
          },
          required: ["module", "allowReferenceFrom"],
          additionalProperties: false,
        },
      },
      {
        type: "object",
        properties: {
          resolveRelativeImport: { type: "boolean" },
          pathIndexMap: {
            type: "object",
            additionalProperties: { type: "integer", minimum: 0 },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    /** @type {Array<{ module: string, allowReferenceFrom: string[], allowSameModule?: boolean, excludeTypeImportChecks?: boolean, targetMembers?: string[] }>} */
    const dependencies = context.options[0] ?? [];
    const { resolveRelativeImport = false, pathIndexMap = {} } =
      context.options[1] ?? {};
    const relativeFilePath = normalizePath(
      path.relative(context.cwd, context.filename),
    );
    // Read once per file instead of once per import declaration
    const importAliasMap = readImportAliasMap(context.cwd, pathIndexMap);

    return {
      ImportDeclaration(node) {
        const importPath = resolveImportPath(
          String(node.source.value),
          resolveRelativeImport ? relativeFilePath : null,
          importAliasMap,
        );
        const importedNames = node.specifiers
          .filter((specifier) => specifier.type === "ImportSpecifier")
          .map((specifier) =>
            specifier.imported.type === "Identifier"
              ? specifier.imported.name
              : String(specifier.imported.value),
          );

        for (const dependency of dependencies) {
          if (!isMatch(importPath, dependency.module)) continue;

          const isAllowed =
            dependency.allowReferenceFrom.some((allowPath) =>
              isMatch(relativeFilePath, allowPath),
            ) ||
            (dependency.allowSameModule &&
              isMatch(relativeFilePath, dependency.module)) ||
            // Only `import type ...`. `import { type ... }` is checked like the original rule
            (dependency.excludeTypeImportChecks && node.importKind === "type");
          if (isAllowed) continue;

          // With `targetMembers`, only importing one of them is reported
          if (dependency.targetMembers) {
            const members = dependency.targetMembers.filter((member) =>
              importedNames.includes(member),
            );
            if (members.length > 0) {
              context.report({
                node,
                messageId: "notAllowedMembers",
                data: {
                  members: members.join(", "),
                  filePath: relativeFilePath,
                },
              });
            }
            continue;
          }

          context.report({
            node,
            messageId: "notAllowed",
            data: { importPath, filePath: relativeFilePath },
          });
        }
      },
    };
  },
};
