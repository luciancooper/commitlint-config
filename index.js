export default {
    extends: [
        '@commitlint/config-conventional',
    ],
    rules: {
        // body rules
        'body-leading-blank': [2, 'always'],
        'body-max-line-length': [2, 'always', 72],
        // footer rules
        'footer-leading-blank': [2, 'always'],
        'footer-max-line-length': [2, 'always', 72],
        // header rules
        'header-max-length': [2, 'always', 72],
        // type rules
        'type-enum': [2, 'always', [
            'build',
            'chore',
            'ci',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'release',
            'revert',
            'style',
            'test',
        ]],
    },
};