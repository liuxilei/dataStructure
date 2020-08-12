const removeKdigits = require('./removeKdigits');

describe('移掉K位数字', () => {
    test('removeKdigits', () => {
        expect(removeKdigits('1432219', 3)).toBe('1219');
        expect(removeKdigits('10200', 1)).toBe('200');
        expect(removeKdigits('10', 2)).toBe('0');
    });
});
