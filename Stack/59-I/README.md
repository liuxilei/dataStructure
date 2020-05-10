## 面试题59 - I. 滑动窗口的最大值

给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

**示例:**

    输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
    输出: [3,3,5,5,6,7] 
    解释: 

    滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
    1 [3  -1  -3] 5  3  6  7       3
    1  3 [-1  -3  5] 3  6  7       5
    1  3  -1 [-3  5  3] 6  7       5
    1  3  -1  -3 [5  3  6] 7       6
    1  3  -1  -3  5 [3  6  7]      7
 

**提示：**

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

## My Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let maxSlides = [];
    const getMax = (arr, index, k) => {
        let result = [];
        for (let i = 0; i < k;i++) {
            if (typeof arr[index + i] === "number") {
                result.push(arr[index + i]);
            }
        }
        if (result.length === k) {
            return Math.max(...result);
        } else {
            return null;
        }
    }
    for (let i = 0;i < nums.length;i++) {
        let currentMax = getMax(nums, i, k);
        if (currentMax) {
            maxSlides.push(currentMax);
        }
    }
    return maxSlides;
};
```

### others

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    if(n == 0) return [];
    let res = [];
    for(let i = 0;i < n - k + 1;i++){
        let max = Number.MIN_SAFE_INTEGER;
        for(let j = i;j < i + k;j++){
            max = Math.max(max,nums[j]);
        }
        res.push(max);
    }
    return res;
};
```
