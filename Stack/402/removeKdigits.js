/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    const stack = [];
    for (let i = 0; i < num.length; i++) {
        let item = num[i];
        while (stack.length && k > 0 && item < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(item);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }

    return stack.length > 0 ? stack.join('') : '0';
};

module.exports = removeKdigits;
