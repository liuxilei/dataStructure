const entityParser = require('./entityParser');

describe('HTML 实体解析器', () => {
    test('entityParser', () => {
        expect(entityParser('&amp; is an HTML entity but &ambassador; is not.')).toBe(
            '& is an HTML entity but &ambassador; is not.',
        );
        expect(entityParser('and I quote: &quot;...&quot;')).toBe('and I quote: "..."');
        expect(entityParser('Stay home! Practice on Leetcode :)')).toBe(
            'Stay home! Practice on Leetcode :)',
        );
        expect(entityParser('x &gt; y &amp;&amp; x &lt; y is always false')).toBe(
            'x > y && x < y is always false',
        );
        expect(entityParser('leetcode.com&frasl;problemset&frasl;all')).toBe(
            'leetcode.com/problemset/all',
        );
    });
});
