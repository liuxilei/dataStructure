const longestWPI = require('./longestWPI');

describe('表现良好的最长时间段', () => {
    test('longestWPI', () => {
        expect(longestWPI([9, 9, 6, 0, 6, 6, 9])).toBe(3);
    });
});
