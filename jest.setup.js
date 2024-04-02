expect.extend({
    toHaveLintReport(report, { valid, errors = null, warnings = null }) {
        if (valid) {
            return report.valid === true ? {
                message: () => 'expected a valid report',
                pass: true,
            } : {
                message: () => [
                    'when linting message:',
                    this.utils.DIM_COLOR(report.input),
                    'expected a valid lint report, but got:',
                    ...report.errors.map(({ name, message }) => ` - error [${name}]: ${message}`),
                    ...report.warnings.map(({ name, message }) => ` - warning [${name}]: ${message}`),
                ].join('\n'),
                pass: false,
            };
        }
        if (report.valid) {
            return {
                message: () => {
                    let errwarn = [
                        errors !== null ? `${errors} error(s)` : '',
                        warnings !== null ? `${warnings} warning(s)` : '',
                    ].filter(Boolean).join(' / ');
                    errwarn &&= ` with ${errwarn}`;
                    return [
                        'when linting message:',
                        this.utils.DIM_COLOR(report.input),
                        `expected an invalid report${errwarn} but got a valid one`,
                    ].join('\n');
                },
                pass: false,
            };
        }
        const [experr, expwarn] = [errors ?? report.errors.length, warnings ?? report.warnings.length];
        if (experr === report.errors.length && expwarn === report.warnings.length) {
            return {
                message: () => 'expected an invalid report',
                pass: true,
            };
        }
        return {
            message: () => {
                let errwarn = [
                    errors !== null ? `${errors} error(s)` : '',
                    warnings !== null ? `${warnings} warning(s)` : '',
                ].filter(Boolean).join(' / ');
                errwarn &&= ` with ${errwarn}`;
                return [
                    'when linting message:',
                    this.utils.DIM_COLOR(report.input),
                    `expected an invalid report${errwarn} but got an invalid one with:`,
                    ...report.errors.map(({ name, message }) => ` - error [${name}]: ${message}`),
                    ...report.warnings.map(({ name, message }) => ` - warning [${name}]: ${message}`),
                ].join('\n');
            },
            pass: false,
        };
    },
});