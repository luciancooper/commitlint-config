module.exports = {
    extends: [
        '@commitlint/config-conventional',
    ],
    rules: {
        'type-enum': [2, 'always', [
            'build',
            'chore',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'release',
            'revert',
            'style',
            'test',
            'update',
        ]],
    },
};