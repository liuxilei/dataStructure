## Evaluate Reverse Polish Notation

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are `+`, `-`, `*`, `/`. Each operand may be an integer or another expression.

**Note:**

- Division between two integers should truncate toward zero.
- The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

**Example 1:**

    Input: ["2", "1", "+", "3", "*"]
    Output: 9
    Explanation: ((2 + 1) * 3) = 9

**Example 2:**

    Input: ["4", "13", "5", "/", "+"]
    Output: 6
    Explanation: (4 + (13 / 5)) = 6

**Example 3:**

    Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
    Output: 22
    Explanation: 
    ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
    = ((10 * (6 / (12 * -11))) + 17) + 5
    = ((10 * (6 / -132)) + 17) + 5
    = ((10 * 0) + 17) + 5
    = (0 + 17) + 5
    = 17 + 5
    = 22

--- 

## 逆波兰表达式求值


根据逆波兰表示法，求表达式的值。

有效的运算符包括 `+`, `-`, `*`, `/` 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

**说明：**

- 整数除法只保留整数部分。
- 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

**示例 1：**

    输入: ["2", "1", "+", "3", "*"]
    输出: 9
    解释: ((2 + 1) * 3) = 9

**示例 2：**

    输入: ["4", "13", "5", "/", "+"]
    输出: 6
    解释: (4 + (13 / 5)) = 6

**示例 3：**

    输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
    输出: 22
    解释: 
    ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
    = ((10 * (6 / (12 * -11))) + 17) + 5
    = ((10 * (6 / -132)) + 17) + 5
    = ((10 * 0) + 17) + 5
    = (0 + 17) + 5
    = 17 + 5
    = 22


## My Solution

```javascript
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = ["+", "-", "*", "/"];
    const stack = [];
    const func = (a, b, operator) => {
        switch(operator) {
            case "+": 
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a/b > 0 ? Math.floor(a / b) : Math.ceil(a / b);
        }
    }
    const isNumber = (str) => {
        return typeof (str * 1) === "number";
    }
    for (let item of tokens) {
        if (operators.includes(item) && isNumber(stack[stack.length - 1]) && isNumber(stack[stack.length - 2])) {
            let temp = stack.pop();
            stack[stack.length - 1] = func(stack[stack.length - 1] * 1, temp * 1, item);
        } else {
            stack.push(item);
        }
    }
    return stack[0];
};
```

## Others

```javascript
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let fun = () => {
        let char = tokens.pop();
        let num;//由于减法和除法的存在顺序问题
        switch (char) {
            case "+":
                return fun() + fun();
            case "-":
                num = fun();
                return fun() - num;
            case "*":
                return fun() * fun();
            case "/":
                num = fun();
                return parseInt(fun() / num, 10);
            default:
                return parseInt(char, 10);
        }  
    }
    return fun();
};

```

