const decodeString = require('./DecodeString');

describe('字符串解码', () => {
    test('decodeString', () => {
        expect(decodeString('3[a]2[bc]')).toBe('aaabcbc');
        expect(decodeString('3[a2[c]]')).toBe('accaccacc');
        expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef');
    });
});
