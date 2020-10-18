## Backspace String Compare

Given two strings `S` and `T`, return if they are equal when both are typed into empty text editors. `#` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

    Input: S = "ab#c", T = "ad#c"
    Output: true
    Explanation: Both S and T become "ac".

**Example 2:**

    Input: S = "ab##", T = "c#d#"
    Output: true
    Explanation: Both S and T become "".

**Example 3:**

    Input: S = "a##c", T = "#a#c"
    Output: true
    Explanation: Both S and T become "c".

**Example 4:**

    Input: S = "a#c", T = "b"
    Output: false
    Explanation: S becomes "c" while T becomes "b".

**Note:**

-   1 <= S.length <= 200
-   1 <= T.length <= 200
-   S and T only contain lowercase letters and '#' characters.

**Follow up:**

-   Can you solve it in O(N) time and O(1) space?

---

## 比较含退格的字符串

给定 `S` 和 `T` 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 `#` 代表退格字符。

**注意**：如果对空文本输入退格字符，文本继续为空。

**示例 1：**

    输入：S = "ab#c", T = "ad#c"
    输出：true
    解释：S 和 T 都会变成 “ac”。

**示例 2：**

    输入：S = "ab##", T = "c#d#"
    输出：true
    解释：S 和 T 都会变成 “”。

**示例 3：**

    输入：S = "a##c", T = "#a#c"
    输出：true
    解释：S 和 T 都会变成 “c”。

**示例 4：**

    输入：S = "a#c", T = "b"
    输出：false
    解释：S 会变成 “c”，但 T 仍然是 “b”。

**提示：**

1. 1 <= S.length <= 200
2. 1 <= T.length <= 200
3. S 和 T 只含有小写字母以及字符 '#'。

**进阶：**

-   你可以用 `O(N)` 的时间复杂度和 `O(1)` 的空间复杂度解决该问题吗？

### My Solution

```javascript
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const backSpaceFunc = (str) => {
        const toolStack = [];
        for (let s of str) {
            if (s === "#") {
                toolStack.pop();
            } else {
                toolStack.push(s);
            }
        }
        return toolStack.join("");
    }  
    return backSpaceFunc(S) === backSpaceFunc(T);
};
```

### others

```javascript
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let reg = /[a-z](?=\#)\#/g;
    S = S.replace(/^\#/, '').replace(reg, '');
    T = T.replace(/^\#/, '').replace(reg, '');
    if (!S.includes('#') && !T.includes('#')) {
        return S == T;
    }
    return backspaceCompare(S, T);
};
```
