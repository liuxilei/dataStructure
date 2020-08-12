## Minimum Remove to Make Valid Parentheses

Given a string s of `'('` , `')'` and lowercase English characters.

Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting parentheses string is valid and return `any` valid string.

Formally, a parentheses string is valid if and only if:

-   It is the empty string, contains only lowercase characters, or
-   It can be written as AB (A concatenated with B), where A and B are valid strings, or
-   It can be written as (A), where A is a valid string.

**Example 1:**

    Input: s = "lee(t(c)o)de)"
    Output: "lee(t(c)o)de"
    Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

**Example 2:**

    Input: s = "a)b(c)d"
    Output: "ab(c)d"

**Example 3:**

    Input: s = "))(("
    Output: ""
    Explanation: An empty string is also valid.

**Example 4:**

    Input: s = "(a(b(c)d)"
    Output: "a(b(c)d)"

**Constraints:**

-   1 <= s.length <= 10^5
-   s[i] is one of  '(' , ')' and lowercase English letters.

---

## 移除无效的括号

给你一个由 `'('`、`')'` 和小写字母组成的字符串 `s`。

你需要从字符串中删除最少数目的 `'('` 或者 `')'` （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。

请返回任意一个合法字符串。

有效「括号字符串」应当符合以下  `任意一条`  要求：

-   空字符串或只包含小写字母的字符串
-   可以被写作  AB（A  连接  B）的字符串，其中  A  和  B  都是有效「括号字符串」
-   可以被写作  (A)  的字符串，其中  A  是一个有效的「括号字符串」

**示例 1：**

    输入：s = "lee(t(c)o)de)"
    输出："lee(t(c)o)de"
    解释："lee(t(co)de)" , "lee(t(c)ode)" 也是一个可行答案。

**示例 2：**

    输入：s = "a)b(c)d"
    输出："ab(c)d"

**示例 3：**

    输入：s = "))(("
    输出：""
    解释：空字符串也是有效的

**示例 4：**

    输入：s = "(a(b(c)d)"
    输出："a(b(c)d)"

**提示：**

-   1 <= s.length <= 10^5
-   s[i]  可能是  '('、')'  或英文小写字母

## My Solution

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const stack = [];
    const stackIndex = [];
    const stackIndex2 = [];
    const stringArr = s.split('');
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        if (item === '(') {
            stack.push('(');
            stackIndex.push(i);
        } else if (item === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
                stackIndex.pop();
            } else {
                stackIndex2.push(i);
            }
        }
    }
    stringArr.map((item, index) => {
        if (stackIndex.includes(index) || stackIndex2.includes(index)) {
            stringArr[index] = '';
        }
    });
    return stringArr.join('');
};
```

## Others

#### 思路

    新建空数组stack存放要删除的括号的下标，新建空数组arr为字符串s转成数组的样子。
    首先遍历一遍s,
    当s[i]==='('的时候，stack数组把这个括号的下标推进去；
    当s[i]===')'的时候，stack数组把这个括号的下标弹出来；
    相当于抵消一个完整的括号。
    现在考虑特殊情况：
    1：遍历完之后stack里面有多余的'('，因为我们在stack存的是下标，直接对我们的arr进行delete操作。
    2：遍历过程中stack数组长度已经为0了，此时又遇到一个')'，这时候不需要去操作stack，我们直接删除arr[i]即可。
    不要用splice去删除指定下标的元素，splice会改变原数组长度，而你原本存的下标是基于原数组的。
    delete方法不会改变数组长度，但删除的那个位置会变成'undefined'，所以我们用fliter方法过滤一遍出有效值arr=arr.filter(val=>val);

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    if (s === '') return s;
    let arr = [...s];
    let stack = [];
    for (let i = 0, length = s.length; i < length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        }
        if (s[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                delete arr[i];
            }
        }
    }
    while (stack.length) {
        delete arr[stack[0]];
        stack.shift();
    }
    arr = arr.filter((val) => val);
    return arr.join('');
};
```
