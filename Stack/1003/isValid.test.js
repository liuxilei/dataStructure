const isValid = require('./isValid');

describe('检查替换后的词是否有效', () => {
    test('isValid', () => {
        expect(isValid('aabcbc')).toBe(true);
        expect(isValid('abcabcababcc')).toBe(true);
        expect(isValid('abccba')).toBe(false);
        expect(isValid('cababc')).toBe(false);
    });
});
