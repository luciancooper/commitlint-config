# @lcooper/commitlint-config

[![ci](https://img.shields.io/github/actions/workflow/status/luciancooper/commitlint-config/ci.yml?logo=github&style=for-the-badge)](https://github.com/luciancooper/commitlint-config/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@lcooper/commitlint-config?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@lcooper/commitlint-config)
[![license](https://img.shields.io/github/license/luciancooper/commitlint-config?color=brightgreen&style=for-the-badge)](#license)

A sharable [commitlint](https://commitlint.js.org) config to enforce [conventional commits](https://conventionalcommits.org). Use with [`@commitlint/cli`](https://www.npmjs.com/package/@commitlint/cli).

## Installation

> Install with npm:
```bash
npm install --save-dev @commitlint/cli @lcooper/commitlint-config
```

> Install with yarn:
```bash
yarn add -D @commitlint/cli @lcooper/commitlint-config
```

## Usage

Add the `commitlint` field to your `package.json` file:

```json
"commitlint": {
  "extends": [
    "@lcooper",
  ]
}
```

Or create a commitlint config file type of your choice in the root folder of your project:

`.commitlintrc`

```json
{
  "extends": [
    "@lcooper"
  ],
}
```

`.commitlintrc.js`

```javascript
module.exports = {
    extends: [
      '@lcooper',
    ],
};
```

Check out the [commitlint docs](https://commitlint.js.org/concepts/shareable-config.html) for more details about sharable configs.

## Usage with Husky

You can configure a git commit message hook using [`husky`](https://github.com/typicode/husky), just add it as a `devDependency`.

If you are using `husky@v9`, follow the instructions on commitlints local setup [documentation page](https://commitlint.js.org/guides/local-setup.html).

To configure a husky commit message hook with `husky@v4`, add the following field to your `package.json`:

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

## Rules

This config extends [`@commitlint/config-conventional`](https://www.npmjs.com/package/@commitlint/config-conventional), and defines the following types:

|Type      |Title                   |Description                                                  |
|----------|------------------------|-------------------------------------------------------------|
|`build`   |Builds                  |Changes that affect the build system or external dependencies|
|`chore`   |Chores                  |Other changes that don't modify src or test files            |
|`ci`      |Continuous Integration  |Changes to continuous integration files and scripts          |
|`docs`    |Documentation           |Changes to documentation                                     |
|`feat`    |Features                |A new feature                                                |
|`fix`     |Bug Fixes               |A bug fix                                                    |
|`perf`    |Performance Improvements|A code change that improves performance                      |
|`refactor`|Code Refactoring        |A code change that neither fixes a bug nor adds a feature    |
|`release` |Releases                |Changes to prepare for a release                             |
|`revert`  |Reverts                 |Reverts a previous commit                                    |
|`style`   |Styles                  |Formatting and white-space changes                           |
|`test`    |Tests                   |Adding missing tests or correcting existing tests            |

Additionally, the max line length of commit message headers, bodies and footers is `72` characters to enforce wrapping.

## License

[MIT](LICENSE)
