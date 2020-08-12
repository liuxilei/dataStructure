/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const stack = [];
    const stackIndex = [];
    const stackIndex2 = [];
    const stringArr = s.split('');
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        if (item === '(') {
            stack.push('(');
            stackIndex.push(i);
        } else if (item === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
                stackIndex.pop();
            } else {
                stackIndex2.push(i);
            }
        }
    }
    stringArr.map((item, index) => {
        if (stackIndex.includes(index) || stackIndex2.includes(index)) {
            stringArr[index] = '';
        }
    });
    return stringArr.join('');
};

module.exports = minRemoveToMakeValid;
