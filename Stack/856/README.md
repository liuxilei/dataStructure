## Score of Parentheses

Given a balanced parentheses string `S`, compute the score of the string based on the following rule:

-   `()` has score `1`
-   `AB` has score `A + B`, where A and B are balanced parentheses strings.
-   `(A)` has score `2 * A`, where A is a balanced parentheses string.

**Example 1:**

    Input: "()"
    Output: 1

**Example 2:**

    Input: "(())"
    Output: 2

**Example 3:**

    Input: "()()"
    Output: 2

**Example 4:**

    Input: "(()(()))"
    Output: 6

**Note:**

1. S is a balanced parentheses string, containing only ( and ).
2. 2 <= S.length <= 50

--- 括号的分数

给定一个平衡括号字符串  `S`，按下述规则计算该字符串的分数：

-   `()` 得 1 分。
-   `AB` 得  `A + B`  分，其中 A 和 B 是平衡括号字符串。
-   `(A)` 得  `2 * A`  分，其中 A 是平衡括号字符串。

**示例 1：**

    输入： "()"
    输出： 1

**示例 2：**

    输入： "(())"
    输出： 2

**示例  3：**

    输入： "()()"
    输出： 2

**示例  4：**

    输入： "(()(()))"
    输出： 6

**提示：**

1. S  是平衡括号字符串，且只含有  (  和  ) 。
2. 2 <= S.length <= 50

## Others

### 思路

1. 构建一个栈
2. 如果遇到(就往栈里面添加
3. 如果遇到)就去寻找最近的左括号抵消，同时计算里面的分数拿(()(()))示例, 栈结构变化如下

    [(] # 遇到 ( 往栈添加 [(, (] # 继续添加 [(, 1] # 遇到 ） 合成一个 1 [(, 1, (] # 遇到 ( 往栈添加 [(, 1, (, (] # 继续添加 [(, 1, (, 1] # 遇到 ） 合成一个 1 [(, 1, 2] # 遇到 ） ，结构就是（1）， 所以计算的话是 1 _ 2 [6] # 遇到 ） ，结构是（1，2）， 所以计算的话是 （1 + 2） _ 2

```javascript
var scoreOfParentheses = function (S) {
    var stack = [];
    for (var i = 0; i < S.length; i++) {
        if (S[i] === '(') stack.push('(');
        if (S[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
                stack.push(1);
            } else {
                var a = stack.pop();
                var temp = 0;
                while (a !== '(') {
                    temp += a;
                    a = stack.pop();
                }
                stack.push(2 * temp);
            }
        }
    }
    var sum = 0;
    stack.forEach((item) => (sum += item));
    return sum;
};
```
