/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const length = s.length;
    //必须是偶数位
    if (length % 2 === 1) return false;
    const hashObj = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ]);
    const stack = [];
    for(let char of s) {
        //如果当前字符属于右符号
        if (hashObj.has(char)) {
            //如果此时栈内没有左符号或者栈顶的元素不与当前遍历的元素对应，则pass
            if (!stack.length || stack[stack.length - 1] !== hashObj.get(char)) {
                return false;
            }
            stack.pop();
        } else {
            //左符号则插入
            stack.push(char);
        }
    };
    return !stack.length;
};

module.exports = isValid;
