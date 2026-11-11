import { describe, it } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Linter, RuleTester } from "eslint";
import rule from "../../../../plugins/kintone/rules/strict-dependencies.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
});

// RuleTester uses `process.cwd()` as `cwd`, so put the files under it
const file = (relativePath) => path.join(process.cwd(), relativePath);

const repositories = {
  module: "src/repositories",
  allowReferenceFrom: ["src/pages"],
  allowSameModule: true,
};

ruleTester.run("strict-dependencies", rule, {
  valid: [
    {
      code: `import { fetchApp } from "src/repositories/app";`,
      filename: file("src/pages/index.js"),
      options: [[repositories]],
    },
    // allowSameModule
    {
      code: `import { fetchApp } from "src/repositories/app";`,
      filename: file("src/repositories/record.js"),
      options: [[repositories]],
    },
    // Glob patterns
    {
      code: `import { Foo } from "src/features/foo/Foo";`,
      filename: file("src/pages/foo/index.js"),
      options: [
        [
          {
            module: "src/features/*/**/*",
            allowReferenceFrom: ["src/pages/**/*"],
          },
        ],
      ],
    },
    // Relative imports are resolved only with `resolveRelativeImport`
    {
      code: `import { fetchApp } from "../repositories/app";`,
      filename: file("src/models/app.js"),
      options: [[repositories]],
    },
    // excludeTypeImportChecks
    {
      code: `import type { App } from "src/repositories/app";`,
      filename: file("src/models/app.ts"),
      options: [[{ ...repositories, excludeTypeImportChecks: true }]],
      languageOptions: {
        parser: (await import("@typescript-eslint/parser")).default,
      },
    },
    // targetMembers: other names can be imported
    {
      code: `import { App } from "src/repositories/app";`,
      filename: file("src/models/app.js"),
      options: [[{ ...repositories, targetMembers: ["fetchApp"] }]],
    },
    // Negated patterns are matched as globs, like the original rule
    {
      code: `import { fetchApp } from "src/repositories/app";`,
      filename: file("src/models/app.js"),
      options: [
        [
          {
            module: "src/repositories",
            allowReferenceFrom: ["!src/legacy.js"],
          },
        ],
      ],
    },
  ],
  invalid: [
    {
      code: `import { fetchApp } from "src/repositories/app";`,
      filename: file("src/legacy.js"),
      options: [
        [
          {
            module: "src/repositories",
            allowReferenceFrom: ["!src/legacy.js"],
          },
        ],
      ],
      errors: [{ messageId: "notAllowed" }],
    },
    {
      code: `import { fetchApp } from "src/repositories/app";`,
      filename: file("src/models/app.js"),
      options: [[repositories]],
      errors: [
        {
          messageId: "notAllowed",
          data: {
            importPath: "src/repositories/app",
            filePath: "src/models/app.js",
          },
        },
      ],
    },
    {
      code: `import { fetchApp } from "../repositories/app";`,
      filename: file("src/models/app.js"),
      options: [[repositories], { resolveRelativeImport: true }],
      errors: [
        {
          messageId: "notAllowed",
          data: {
            importPath: "src/repositories/app",
            filePath: "src/models/app.js",
          },
        },
      ],
    },
    // `import { type ... }` is not excluded, like the original rule
    {
      code: `import { type App } from "src/repositories/app";`,
      filename: file("src/models/app.ts"),
      options: [[{ ...repositories, excludeTypeImportChecks: true }]],
      languageOptions: {
        parser: (await import("@typescript-eslint/parser")).default,
      },
      errors: [{ messageId: "notAllowed" }],
    },
    {
      code: `import { App, fetchApp } from "src/repositories/app";`,
      filename: file("src/models/app.js"),
      options: [[{ ...repositories, targetMembers: ["fetchApp"] }]],
      errors: [
        {
          messageId: "notAllowedMembers",
          data: { members: "fetchApp", filePath: "src/models/app.js" },
        },
      ],
    },
    // Every matching restriction is checked
    {
      code: `import { Foo } from "src/features/foo/index.ts";`,
      filename: file("src/pages/foo.js"),
      options: [
        [
          {
            module: "src/features/foo/**/*",
            allowReferenceFrom: ["src/features/foo/**/*"],
          },
          {
            module: "src/features/foo/index.ts",
            allowReferenceFrom: ["src/pages/**/*"],
          },
        ],
      ],
      errors: [{ messageId: "notAllowed" }],
    },
  ],
});

describe("strict-dependencies with tsconfig.json", () => {
  /**
   * Lints `code` as `src/models/app.js` in a directory with `tsconfig`.
   * @param {string} tsconfig
   * @param {string} code
   */
  const lintWithTsconfig = (tsconfig, code) => {
    const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "strict-dependencies-"));
    try {
      fs.writeFileSync(path.join(cwd, "tsconfig.json"), tsconfig);
      const linter = new Linter({ cwd });
      return linter
        .verify(
          code,
          {
            plugins: { kintone: { rules: { "strict-dependencies": rule } } },
            rules: {
              "kintone/strict-dependencies": ["error", [repositories]],
            },
          },
          path.join(cwd, "src/models/app.js"),
        )
        .map(({ ruleId, message }) => ({ ruleId, message }));
    } finally {
      fs.rmSync(cwd, { recursive: true, force: true });
    }
  };

  it("should replace aliases of compilerOptions.paths", () => {
    const messages = lintWithTsconfig(
      `{
        // Comments and trailing commas are allowed
        "compilerOptions": {
          "baseUrl": ".",
          "paths": { "@/*": ["src/*"], },
        },
      }`,
      `import { fetchApp } from "@/repositories/app";`,
    );
    assert.deepStrictEqual(messages, [
      {
        ruleId: "kintone/strict-dependencies",
        message:
          "import 'src/repositories/app' is not allowed from src/models/app.js.",
      },
    ]);
  });

  it("should ignore invalid compilerOptions.paths instead of crashing", () => {
    const messages = lintWithTsconfig(
      `{ "compilerOptions": { "baseUrl": ".", "paths": { "@/*": [null] } } }`,
      `import { fetchApp } from "src/repositories/app";`,
    );
    assert.deepStrictEqual(messages, [
      {
        ruleId: "kintone/strict-dependencies",
        message:
          "import 'src/repositories/app' is not allowed from src/models/app.js.",
      },
    ]);
  });
});
