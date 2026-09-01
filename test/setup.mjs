/**
 * Expose the `node:test` API as globals so that test files and ESLint's
 * `RuleTester` (which looks up global `describe`/`it`) can use them.
 * Loaded via `node --test --import ./test/setup.mjs`.
 */
import { describe, it, before, after, beforeEach, afterEach } from "node:test";

Object.assign(globalThis, {
  describe,
  it,
  before,
  after,
  beforeEach,
  afterEach,
});
