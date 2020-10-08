/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const length = s.length;
    if (length % 2 === 1) {
        return false;
    }
    const hashObj = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ]);
    const stack = [];
    s.split("").forEach(char => {
        if (hashObj.has(char)) {
            if (!stack.length || stack[stack.length - 1] !== hashObj.get(char)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(char);
        }
    });
    return !stack.length;
};

module.exports = isValid;
