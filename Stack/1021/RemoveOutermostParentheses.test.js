const removeOuterParentheses = require('./RemoveOutermostParentheses');

describe('删除最外层的括号测试', () => {
    test('removeOuterParentheses方法示例测试', () => {
        expect(removeOuterParentheses('(()())(())')).toBe('()()()');
        expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())');
        expect(removeOuterParentheses('()()')).toBe('');
    });
});
