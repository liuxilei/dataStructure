const scoreOfParentheses = require('./scoreOfParentheses');

describe('括号的分数', () => {
    test('scoreOfParentheses', () => {
        expect(scoreOfParentheses('()')).toBe(1);
        expect(scoreOfParentheses('(())')).toBe(2);
        expect(scoreOfParentheses('()()')).toBe(2);
        expect(scoreOfParentheses('(()(()))')).toBe(6);
    });
});
