## Longest Well-Performing Interval

We are given `hours`, a list of the number of hours worked per day for a given employee.

A day is considered to be a tiring day if and only if the number of hours worked is (strictly) greater than `8`.

A well-performing interval is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.

Return the length of the longest well-performing interval.

**Example 1:**

    Input: hours = [9,9,6,0,6,6,9]
    Output: 3
    Explanation: The longest well-performing interval is [9,9,6].

**Constraints:**

-   1 <= hours.length <= 10000
-   0 <= hours[i] <= 16

---

## 表现良好的最长时间段

给你一份工作时间表  `hours`，上面记录着某一位员工每天的工作小时数。

我们认为当员工一天中的工作小时数大于  `8` 小时的时候，那么这一天就是「`劳累的一天」`。

所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 `大于`「不劳累的天数」。

请你返回「表现良好时间段」的最大长度。

**示例 1：**

    输入：hours = [9,9,6,0,6,6,9]
    输出：3
    解释：最长的表现良好时间段是 [9,9,6]。

**提示：**

    1 <= hours.length <= 10000
    0 <= hours[i] <= 16

## Others

思路：以输入样例 hours = [9,9,6,0,6,6,9] 为例，我们将大于 88 小时的一天记为 11 分，小于等于 88 小时的一天记为 -1−1 分。那么处理后，我们得到 score = [1, 1, -1, -1, -1, -1, 1]，然后我们对得分数组计算前缀和 presum = [0, 1, 2, 1, 0, -1, -2, -1]。题目要求返回表现良好时间段的最大长度，即求最长的一段中，得分 11 的个数大于得分 -1−1 的个数，也就是求 score 数组中最长的一段子数组，其和大于 00，那么也就是找出前缀和数组 presum 中两个索引 i 和 j，使 j - i 最大，且保证 presum[j] - presum[i] 大于 00。

```javascript
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    let prefixSum = new Array(hours.length + 1).fill(0);
    for (let i = 1; i <= hours.length; i++) {
        if (hours[i - 1] > 8) {
            prefixSum[i] = prefixSum[i - 1] + 1;
        } else {
            prefixSum[i] = prefixSum[i - 1] - 1;
        }
    }

    let max = 0;
    for (let i = 0; i < prefixSum.length - 1; i++) {
        for (let j = i + 1; j < prefixSum.length; j++) {
            if (prefixSum[j] - prefixSum[i] > 0) {
                max = Math.max(max, j - i);
            }
        }
    }
    return max;
};
```
