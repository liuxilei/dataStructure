/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    for (let item of s) {
        let top = stack[stack.length - 1];
        if (top && top !== item && top.toLocaleUpperCase() === item.toLocaleUpperCase()) {
            stack.pop();
        } else {
            stack.push(item);
        }
    }
    return stack.join("");
};

module.exports = makeGood;