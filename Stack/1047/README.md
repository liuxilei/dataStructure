## Remove All Adjacent Duplicates In String

Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

**Example 1:**

    Input: "abbaca"
    Output: "ca"
    Explanation:
    For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

**Note:**

1. `1 <= S.length <= 20000`
2. S consists only of English lowercase letters.

---

## 删除字符串中的所有相邻重复项

给出由小写字母组成的字符串  S，`重复项删除操作`会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

示例：

    输入："abbaca"
    输出："ca"
    解释：
    例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。

**提示：**

1. 1 <= S.length <= 20000
2. S 仅由小写英文字母组成。

### My Solution

```javascript
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let stack = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== stack[stack.length - 1]) {
            stack.push(S[i]);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
};
```

### others

```javascript
var removeDuplicates = function (S) {
    let stack = [];
    for (c of S) {
        let prev = stack.pop();
        if (prev !== c) {
            stack.push(prev);
            stack.push(c);
        }
    }
    return stack.join('');
};
```
