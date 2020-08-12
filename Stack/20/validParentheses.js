/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stringObj = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    const stack = [];
    for (let item of s) {
        if (stringObj[stack[stack.length - 1]] === item) {
            stack.pop();
        } else {
            stack.push(item);
        }
    }
    return stack.length === 0;
};

module.exports = isValid;
