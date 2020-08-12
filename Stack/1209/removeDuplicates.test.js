const removeDuplicates = require('./removeDuplicates');

describe('删除字符串中的所有相邻重复项 II', () => {
    test('removeDuplicates', () => {
        expect(removeDuplicates('abcd', 2)).toBe('abcd');
        expect(removeDuplicates('deeedbbcccbdaa', 3)).toBe('aa');
        expect(removeDuplicates('pbbcggttciiippooaais', 2)).toBe('ps');
    });
});
