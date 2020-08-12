## Minimum Add to Make Parentheses Valid

Given a string `S` of `'('` and `')'` parentheses, we add the minimum number of parentheses ( `'('` or `')'`, and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

-   It is the empty string, or
-   It can be written as `AB` (A concatenated with B), where `A` and `B` are valid strings, or
-   It can be written as `(A)`, where `A` is a valid string. Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

**Example 1:**

    Input: "())"
    Output: 1

**Example 2:**

    Input: "((("
    Output: 3

**Example 3:**

    Input: "()"
    Output: 0

**Example 4:**

    Input: "()))(("
    Output: 4

**Note:**

1. S.length <= 1000
2. S only consists of '(' and ')' characters.

---

## 使括号有效的最少添加

给定一个由  `'('`  和  `')'`  括号组成的字符串 `S`，我们需要添加最少的括号（ `'('`  或是  `')'`，可以在任何位置），以使得到的括号字符串有效。

从形式上讲，只有满足下面几点之一，括号字符串才是有效的：

-   它是一个空字符串，或者
-   它可以被写成  `AB` （`A`  与  `B`  连接）, 其中  `A` 和  `B`都是有效字符串，或者
-   它可以被写作  `(A)`，其中  `A`  是有效字符串。给定一个括号字符串，返回为使结果字符串有效而必须添加的最少括号数。

**示例 1：**

    输入："())"
    输出：1

**示例 2：**

    输入："((("
    输出：3

**示例 3：**

    输入："()"
    输出：0

**示例 4：**

    输入："()))(("
    输出：4

**提示：**

1. S.length <= 1000
2. S 只包含  '(' 和  ')'  字符。

## My Solution

```javascript
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    const stack = [];
    for (let i = 0; i < S.length; i++) {
        if (stack[stack.length - 1] === '(' && S[i] === ')') {
            stack.pop();
        } else {
            stack.push(S[i]);
        }
    }
    return stack.join('').length;
};
```

## Others

有效括号为“（）”，建立一个栈，当下元素与栈顶配对成“（）”时，出栈，最后栈大小即为结果。

```javascript
/**
 * @param {string} S
 * @return {number}
 */
const obj = {
    ')': '(',
};
var minAddToMakeValid = function (S) {
    let stack = [];
    if (S.length === 0) return S;
    for (let item of S) {
        if (stack.length && stack[stack.length - 1] === obj[item]) {
            stack.pop();
            continue;
        }
        stack.push(item);
    }
    return stack.length;
};
```
