/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const stack = [];
    init = 0;
    for (let i = 0; i < pushed.length; i++) {
        let item = pushed[i];
        stack.push(item);
        (function f(stack, popped) {
            if (stack[stack.length - 1] === popped[init] && init <= popped.length - 1) {
                stack.pop();
                init++;
                f(stack, popped);
            }
        })(stack, popped);
    }
    return stack.length === 0;
};

module.exports = validateStackSequences;
