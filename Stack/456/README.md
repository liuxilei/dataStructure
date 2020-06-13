## 132 Pattern

Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence a`i`, a`j`, a`k` such that `i` < `j` < `k` and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.

**Note:** n will be less than 15,000.

**Example 1:**

    Input: [1, 2, 3, 4]

    Output: False

    Explanation: There is no 132 pattern in the sequence.

**Example 2:**

    Input: [3, 1, 4, 2]

    Output: True

    Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

**Example 3:**

    Input: [-1, 3, 2, 0]

    Output: True

    Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

---

## 132模式

给定一个整数序列：a1, a2, ..., an，一个132模式的子序列 a`i`, a`j`, a`k` 被定义为：当 `i` < `j` < `k` 时，a`i` < a`k` < a`j`。设计一个算法，当给定有 n 个数字的序列时，验证这个序列中是否含有132模式的子序列。

**注意** n 的值小于15000。

**示例1:**

    输入: [1, 2, 3, 4]

    输出: False

    解释: 序列中不存在132模式的子序列。

**示例 2:**

    输入: [3, 1, 4, 2]

    输出: True

    解释: 序列中有 1 个132模式的子序列： [1, 4, 2].

**示例 3:**

    输入: [-1, 3, 2, 0]

    输出: True

    解释: 序列中有 3 个132模式的的子序列: [-1, 3, 2], [-1, 3, 0] 和 [-1, 2, 0].

## Others

[题解](https://leetcode-cn.com/problems/132-pattern/solution/132mo-shi-by-leetcode-2/)

思路
- 1.如果数组长度小于3，直接返回false（寻找132模式）
- 2.将每个元素前面的最小值，放入数组min
- 3.从后往前遍历，首先满足条件 3>1（一定满足3>=1，排除3=1的情况）
- 4.while循环确保条件2>1,只要有2<=1的情况，直接出栈
- 5.只要栈非空，说明同时满足3>1 且2>1，一旦满足2<3，返回true
- 6.其余情况直接入栈 */

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let min = new Array(nums.length);
    const stack = [];
    min[0] = nums[0];
    if (nums.length < 3) {
        return false;
    }
    for (let i = 1;i < nums.length;i++) {
        min[i] = Math.min(min[i - 1], nums[i]);
    }

    for (let i = nums.length - 1;i >= 0;i--) {
        if (nums[i] > min[i]) {
            while(stack.length && stack[stack.length - 1] <= min[i]) {
                stack.pop();
            }
            if (stack.length && stack[stack.length - 1] < nums[i]) {
                return true;
            }
            stack.push(nums[i]);
        }
    }
    return false;
};
```

