/**
 * Wire ESLint's `RuleTester` to the `node:test` runner.
 * `RuleTester` resolves `describe`/`it` on its own (from `RuleTester.describe`/
 * `RuleTester.it`, then globals, then a synchronous fallback), so hand it the
 * `node:test` functions here via its public API.
 * Loaded via `node --test --import ./test/setup.mjs`.
 */
import { describe, it } from "node:test";
import { RuleTester } from "eslint";

RuleTester.describe = describe;
RuleTester.it = it;
