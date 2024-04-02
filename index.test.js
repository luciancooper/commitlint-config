import load from '@commitlint/load';
import lint from '@commitlint/lint';

let lintMsg;

beforeAll(async () => {
    const { rules, parserPreset: { parserOpts } } = await load({}, { file: './index.js' });
    lintMsg = async (msg) => lint(msg, rules, { parserOpts });
});

describe('types', () => {
    test('lints valid types', async () => {
        await expect(lintMsg('feat: new features')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('fix: bug fixes')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('test: changes to tests')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('build: build system')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('ci: continuous integration')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('perf: performance improvements')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('chore: miscellaneous chores')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('docs: documentation changes')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('refactor: code refactoring')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('release: new releases')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('revert: code reversions')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('style: style changes')).resolves.toHaveLintReport({ valid: true });
    });

    test('lints invalid types', async () => {
        await expect(lintMsg('bad: invalid type')).resolves.toHaveLintReport({ valid: false, errors: 1 });
    });
});

describe('scope', () => {
    test('lints valid scopes', async () => {
        await expect(lintMsg('feat(lower case): subject')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('feat(camelCase): subject')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('feat(kebab-case): subject')).resolves.toHaveLintReport({ valid: true });
        await expect(lintMsg('feat(PascalCase): subject')).resolves.toHaveLintReport({ valid: true });
    });
});

describe('subject', () => {
    test('lints empty subjects', async () => {
        await expect(lintMsg('feat: ')).resolves.toHaveLintReport({ valid: false });
    });

    test('lints subjects starting with invalid case types', async () => {
        await expect(lintMsg('feat: Start Case')).resolves.toHaveLintReport({ valid: false, errors: 1 });
        await expect(lintMsg('feat: Sentance case')).resolves.toHaveLintReport({ valid: false, errors: 1 });
        await expect(lintMsg('feat: PascalCase')).resolves.toHaveLintReport({ valid: false, errors: 1 });
        await expect(lintMsg('feat: UPPERCASE')).resolves.toHaveLintReport({ valid: false, errors: 1 });
    });

    test('lints subjects that end in periods', async () => {
        await expect(lintMsg('feat: a new feature.')).resolves.toHaveLintReport({ valid: false, errors: 1 });
    });
});

describe('header', () => {
    test('lints headers with trailing whitespace', async () => {
        await expect(lintMsg('feat: a new feature ')).resolves.toHaveLintReport({ valid: false, errors: 1 });
    });

    test('lints headers that are too long', async () => {
        await expect(lintMsg(`feat: ${'x'.repeat(80)}`)).resolves.toHaveLintReport({ valid: false, errors: 1 });
    });
});

describe('body', () => {
    test('lints leading blank line before body', async () => {
        // with leading blank space
        await expect(lintMsg(
            'feat: a new feature\n\n'
            + 'message body',
        )).resolves.toHaveLintReport({ valid: true });
        // without leading blank space
        await expect(lintMsg(
            'feat: a new feature\n'
            + 'message body',
        )).resolves.toHaveLintReport({ valid: false, errors: 1 });
    });

    test('lints body lines that are too long', async () => {
        await expect(lintMsg(
            'feat: subject\n\n'
            + 'x'.repeat(100),
        )).resolves.toHaveLintReport({ valid: false, errors: 1 });
    });
});

describe('footer', () => {
    test('lints leading blank line before footer', async () => {
        // with leading blank space
        await expect(lintMsg(
            'feat: a new feature\n\n'
            + 'message body\n\n'
            + 'BREAKING CHANGE: footer text',
        )).resolves.toHaveLintReport({ valid: true });
        // without leading blank space
        await expect(lintMsg(
            'feat: a new feature\n\n'
            + 'message body\n'
            + 'BREAKING CHANGE: footer text',
        )).resolves.toHaveLintReport({ valid: false, errors: 1 });
    });

    test('lints footer lines that are too long', async () => {
        await expect(lintMsg(
            'feat: a new feature\n\n'
            + 'message body\n\n'
            + `BREAKING CHANGE: ${'x'.repeat(100)}`,
        )).resolves.toHaveLintReport({ valid: false, errors: 1 });
    });
});