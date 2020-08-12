/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {
    const left = [];
    const right = [];
    let stack = [];
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
        let item = A[i];
        while (stack.length && A[stack[stack.length - 1]] >= item) {
            stack.pop();
        }
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    stack = [];

    for (let i = A.length - 1; i >= 0; i--) {
        let item = A[i];
        while (stack.length && A[stack[stack.length - 1]] > item) {
            stack.pop();
        }
        right[i] = stack.length ? stack[stack.length - 1] : A.length;
        stack.push(i);
    }

    for (let i = 0; i < A.length; i++) {
        sum += (i - left[i]) * (right[i] - i) * A[i];
        sum %= 1e9 + 7;
    }
    return sum;
};

module.exports = sumSubarrayMins;
