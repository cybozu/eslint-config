import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/jsx-no-bind.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-no-bind", rule, {
  valid: [
    { code: `<button onClick={handleClick} />;` },
    { code: `<button onClick={this.handleClick} />;` },
    {
      code: `<button onClick={() => {}} />;`,
      options: [{ allowArrowFunctions: true }],
    },
    {
      code: `<div ref={() => {}} />;`,
      options: [{ ignoreRefs: true }],
    },
    {
      code: `<button onClick={this.foo.bind(this)} />;`,
      options: [{ allowBind: true }],
    },
    {
      code: `<button onClick={function() {}} />;`,
      options: [{ allowFunctions: true }],
    },
  ],
  invalid: [
    {
      code: `<button onClick={() => {}} />;`,
      errors: [{ messageId: "arrowFunc" }],
    },
    {
      code: `<button onClick={this.foo.bind(this)} />;`,
      errors: [{ messageId: "bindCall" }],
    },
    {
      code: `<button onClick={function() {}} />;`,
      errors: [{ messageId: "func" }],
    },
    {
      code: `<div ref={() => {}} />;`,
      errors: [{ messageId: "arrowFunc" }],
    },
  ],
});
