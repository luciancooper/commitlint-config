module.exports = {
    extends: [
        '@commitlint/config-conventional',
    ],
    rules: {
        'body-leading-blank': [2, 'always'],
        'body-max-line-length': [2, 'always', 72],
        'footer-leading-blank': [2, 'always'],
        'footer-max-line-length': [2, 'always', 72],
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