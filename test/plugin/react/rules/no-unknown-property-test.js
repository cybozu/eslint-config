import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/no-unknown-property.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("no-unknown-property", rule, {
  valid: [
    { code: `<div className="x" />;` },
    { code: `<div id="x" />;` },
    { code: `<div data-foo="x" />;` },
    { code: `<div aria-label="x" />;` },
    { code: `<div onClick={() => {}} />;` },
    // Custom components are not checked
    { code: `<MyComp unknownProp="x" />;` },
    { code: `<img src="x.png" alt="x" />;` },
    // Common element-specific attributes
    { code: `<meta content="width=device-width" />;` },
    { code: `<meta property="og:title" content="x" />;` },
    { code: `<meta charset="utf-8" />;` },
    { code: `<img loading="lazy" src="x.png" alt="x" />;` },
    { code: `<td abbr="x" />;` },
    {
      code: `<link rel="preload" imageSrcSet="x.png 1x" imageSizes="100vw" />;`,
    },
    // Custom elements (web components) accept arbitrary attributes
    { code: `<my-element class="x" custom-attr="y" />;` },
    { code: `<button is="fancy-button" fancyprop="x" />;` },
    // camelCase SVG attributes
    { code: `<path strokeWidth="2" fillRule="evenodd" d="M0 0" />;` },
  ],
  invalid: [
    {
      code: `<div class="x" />;`,
      errors: [{ messageId: "unknownProp" }],
    },
    {
      code: `<label for="x" />;`,
      errors: [{ messageId: "unknownProp" }],
    },
    {
      code: `<div tabindex="0" />;`,
      errors: [{ messageId: "unknownProp" }],
    },
    {
      code: `<div fooBarBaz="x" />;`,
      errors: [{ messageId: "unknownPropNoSuggestion" }],
    },
    // Kebab-case SVG attributes are reported with camelCase suggestions
    {
      code: `<path stroke-width="2" />;`,
      errors: [
        {
          messageId: "unknownProp",
          data: {
            name: "stroke-width",
            tag: "path",
            suggestion: "strokeWidth",
          },
        },
      ],
    },
    {
      code: `<path fill-rule="evenodd" />;`,
      errors: [
        {
          messageId: "unknownProp",
          data: { name: "fill-rule", tag: "path", suggestion: "fillRule" },
        },
      ],
    },
  ],
});
