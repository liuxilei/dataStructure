const minAddToMakeValid = require('./MinimumAddtoMakeParenthesesValid');

describe('使括号有效的最少添加', () => {
    it('minAddToMakeValid', () => {
        expect(minAddToMakeValid('())')).toBe(1);
        expect(minAddToMakeValid('(((')).toBe(3);
        expect(minAddToMakeValid('()')).toBe(0);
        expect(minAddToMakeValid('()))((')).toBe(4);
    });
});
