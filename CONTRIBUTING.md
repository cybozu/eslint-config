# Contributing to `@cybozu/eslint-config`

Thank you for your interest in contributing to `@cybozu/eslint-config`! This document provides guidelines for contributing to this project.

## Pull Request Guidelines

### Title Format

Please use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format for your PR title. This helps maintain a consistent history and enables automated changelog generation.

e.g.

- `feat: add css-baseline preset`
- `fix: resolve TypeScript rule conflicts`
- `docs: update README with new preset`
- `chore: update dependencies`

### Language

Using **English** is strongly encouraged for all contributions, including code comments, commit messages, and documentation.

### Changes Required

- **README.md**: If you're adding a new preset, please update the README.md to include it in the "[Support rule set](https://github.com/cybozu/eslint-config?tab=readme-ov-file#support-rule-set)" section
- **Tests**: Include tests for any new functionality
  - Ensure all existing tests pass with `npm run test`

## Setup

1. Fork the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Run tests: `npm run test`
5. Run linting: `npm run lint`
6. Commit your changes with a descriptive message
7. Push to your forked repository
8. Open a PR with Conventional Commits format title

## Questions?

If you have any questions about contributing or the release process, please open an issue or reach out to the maintainers. We appreciate your contributions always!