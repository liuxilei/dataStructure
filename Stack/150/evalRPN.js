/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const operators = ['+', '-', '*', '/'];
    const stack = [];
    const func = (a, b, operator) => {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b);
        }
    };
    const isNumber = (str) => {
        return typeof (str * 1) === 'number';
    };
    for (let item of tokens) {
        if (
            operators.includes(item) &&
            isNumber(stack[stack.length - 1]) &&
            isNumber(stack[stack.length - 2])
        ) {
            let temp = stack.pop();
            stack[stack.length - 1] = func(stack[stack.length - 1] * 1, temp * 1, item);
        } else {
            stack.push(item);
        }
    }
    return stack[0];
};

module.exports = evalRPN;
