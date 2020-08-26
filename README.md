# @lcooper/commitlint-config

[![npm][npm-badge]][npm-link]
[![license][license-badge]][license-link]

A sharable [commitlint](https://commitlint.js.org) config to enforce [conventional commits](https://conventionalcommits.org). Use with [`@commitlint/cli`](https://www.npmjs.com/package/@commitlint/cli).

## Installation

Install with npm:

```bash
npm install --save-dev @commitlint/cli @lcooper/commitlint-config
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

Check out the [commitlint docs](https://commitlint.js.org/#/concepts-shareable-config) for more details about sharable configs.

## Usage with Husky

To configure a [`husky`](https://github.com/typicode/husky) commit message hook, add the following field to your `package.json`:

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

Or add a husky config file to your project root:

`.huskyrc`

```json
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

`.huskyrc.js`

```javascript
module.exports = {
    hooks: {
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    },
};
```

## Rules

This config extends [`@commitlint/config-conventional`](https://www.npmjs.com/package/@commitlint/config-conventional), and defines the following types:

|Type      |Title                   |Description                                                  |
|----------|------------------------|-------------------------------------------------------------|
|`build`   |Builds                  |Changes that affect the build system or external dependencies|
|`chore`   |Chores                  |Other changes that don't modify src or test files            |
|`docs`    |Documentation           |Changes to documentation                                     |
|`feat`    |Features                |A new feature                                                |
|`fix`     |Bug Fixes               |A bug fix                                                    |
|`perf`    |Performance Improvements|A code change that improves performance                      |
|`refactor`|Code Refactoring        |A code change that neither fixes a bug nor adds a feature    |
|`release` |Releases                |Changes to prepare for a release                             |
|`revert`  |Reverts                 |Reverts a previous commit                                    |
|`style`   |Styles                  |Formatting and white-space changes                           |
|`test`    |Tests                   |Adding missing tests or correcting existing tests            |
|`update`  |Code Updates            |A code improvement that does not add a new feature           |

Additionally, the max line length of commit message bodies and footers is `72` characters to enforce wrapping.

[npm-link]: https://www.npmjs.com/package/@lcooper/commitlint-config
[npm-badge]: https://img.shields.io/npm/v/@lcooper/commitlint-config?logo=npm&style=for-the-badge
[license-link]: LICENSE
[license-badge]: https://img.shields.io/github/license/luciancooper/commitlint-config?color=brightgreen&style=for-the-badge