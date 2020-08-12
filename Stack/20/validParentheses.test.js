const isValid = require('./validParentheses');

describe('有效括号方法实现验证', () => {
    test('示例验证', () => {
        expect(isValid('()')).toBe(true);
        expect(isValid('()[]{}')).toBe(true);
        expect(isValid('(]')).toBe(false);
        expect(isValid('([)]')).toBe(false);
        expect(isValid('{[]}')).toBe(true);
    });
});
