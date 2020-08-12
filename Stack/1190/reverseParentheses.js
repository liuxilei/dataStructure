var reverseParentheses = function (s) {
    const stack = [''];
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        if (item === '(') {
            stack.push('');
        } else if (item === ')') {
            let top = stack.pop();
            let temp = top.split('').reverse().join('');
            stack[stack.length - 1] += temp;
        } else {
            stack[stack.length - 1] += item;
        }
    }
    return stack.pop();
};

module.exports = reverseParentheses;
