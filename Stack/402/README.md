## Remove K Digits

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

**Note:**

- The length of num is less than 10002 and will be ≥ k.
- The given num does not contain any leading zero.

**Example 1:**

    Input: num = "1432219", k = 3
    Output: "1219"
    Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

**Example 2:**

    Input: num = "10200", k = 1
    Output: "200"
    Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

**Example 3:**

    Input: num = "10", k = 2
    Output: "0"
    Explanation: Remove all the digits from the number and it is left with nothing which is 0.

---

## 移掉K位数字

给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

**注意:**

- num 的长度小于 10002 且 ≥ k。
- num 不会包含任何前导零。

**示例 1 :**

    输入: num = "1432219", k = 3
    输出: "1219"
    解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。

**示例 2 :**

    输入: num = "10200", k = 1
    输出: "200"
    解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。

**示例 3 :**

    输入: num = "10", k = 2
    输出: "0"
    解释: 从原数字移除所有的数字，剩余为空就是0。

### Others

[官方思路(利用栈的贪心算法)](https://leetcode-cn.com/problems/remove-k-digits/solution/yi-diao-kwei-shu-zi-by-leetcode/)

**解题思路**
- 从左到右遍历一次，维护单调栈
- 删除栈顶元素的条件：当前遍历的元素比此时的栈顶元素小
- 首位的 '0' 为无效字符，要清除首位的 '0'，例如：'0015' -> '15'
- 如果以上步骤处理完，字符为空，也要返回 '0'

```javascript
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    for (let i = 0;i < num.length;i++) {
        let item = num[i];
        while(stack.length && k > 0 && item < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(item);
    }

    while(k > 0) {
        stack.pop();
        k--;
    }

    while(stack.length > 0 && stack[0] === "0") {
        stack.shift();
    }

    return stack.length > 0 ? stack.join("") : "0";
};
```

