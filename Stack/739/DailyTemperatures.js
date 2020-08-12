/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    const stack = [];
    for (let i = 0; i < T.length; i++) {
        for (let j = i; j < T.length; j++) {
            if (T[j] > T[i]) {
                stack.push(j - i);
                break;
            } else if (j === T.length - 1) {
                stack.push(0);
            }
        }
    }
    return stack;
};

module.exports = dailyTemperatures;
