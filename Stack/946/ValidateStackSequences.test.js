const validateStackSequences = require('./ValidateStackSequences');

describe('验证栈序列', () => {
    test('validateStackSequences', () => {
        expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true);
        expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(false);
        expect(validateStackSequences([0], [0])).toBe(true);
    });
});
