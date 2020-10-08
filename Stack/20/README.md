## Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

**Example 1:**

    Input: "()"
    Output: true

**Example 2:**

    Input: "()[]{}"
    Output: true

**Example 3:**

    Input: "(]"
    Output: false

**Example 4:**

    Input: "([)]"
    Output: false

**Example 5:**

    Input: "{[]}"
    Output: true

---

## 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

**示例 1:**

    输入: "()"
    输出: true

**示例  2:**

    输入: "()[]{}"
    输出: true

**示例  3:**

    输入: "(]"
    输出: false

**示例  4:**

    输入: "([)]"
    输出: false

**示例  5:**

    输入: "{[]}"
    输出: true

### others

#### 官方题解

判断括号的有效性可以使用【栈】这一数据结构来解决。

我们对给定的字符串`s`进行遍历，当我们遇到一个左括号时，我们会期望在后续的遍历中，有一个相同类型的右括号将其闭合。由于**后遇到的左括号要先闭合**，因此我们可以将这个左括号放入栈顶。

当我们遇到一个右括号时，我们需要将一个相同类型的左括号闭合。此时，我们可以取出栈顶的左括号并判断它们是否是相同类型的括号。如果不是相同的类型，或者栈中并没有左括号，那么字符串`s`无效，返回`false`。为了快速判断括号的类型，我们可以使用哈希映射（`HashMap`）存储每一个括号。哈希映射的键为右括号，值为相同类型的左括号。

在遍历结束后，如果栈中没有左括号，说明我们将字符串`s`中的所有左括号闭合，返回`true`，否则返回`false`。

注意到有效字符串的长度一定为偶数，因此如果字符串的长度为奇数，我们可以直接返回`false`，省去后续的遍历判断过程。

```javascript
var isValid = function(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    s.split('').forEach(ch => {
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        } 
        else {
            stk.push(ch);
        }
    });
    return !stk.length;
};
```
