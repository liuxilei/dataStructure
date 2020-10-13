## Next Greater Element I

You are given two arrays **(without duplicates)** `nums1` and `nums2` where `nums1`’s elements are subset of `nums2`. Find all the next greater numbers for `nums1`'s elements in the corresponding places of `nums2`.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

**Example 1:** Input: nums1 = [4,1,2], nums2 = [1,3,4,2]. Output: [-1,3,-1] Explanation: For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1. For number 1 in the first array, the next greater number for it in the second array is 3. For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

**Example 2:**

    Input: nums1 = [2,4], nums2 = [1,2,3,4].
    Output: [3,-1]
    Explanation:
        For number 2 in the first array, the next greater number for it in the second array is 3.
        For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

**Note:**

-   All elements in nums1 and nums2 are unique.
-   The length of both nums1 and nums2 would not exceed 1000.

---

### 下一个更大元素 I

给定两个 `没有重复元素` 的数组  `nums1` 和  `nums2` ，其中`nums1`  是  `nums2`  的子集。找到  `nums1`  中每个元素在  `nums2`  中的下一个比其大的值。

`nums1`  中数字  **x**  的下一个更大元素是指  **x**  在  `nums2`  中对应位置的右边的第一个比  **x**  大的元素。如果不存在，对应位置输出 -1 。

**示例 1:**

    输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
    输出: [-1,3,-1]
    解释:
        对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
        对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
        对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。

**示例 2:**

    输入: nums1 = [2,4], nums2 = [1,2,3,4].
    输出: [3,-1]
    解释:
        对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。
        对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出 -1 。

**提示：**

1. nums1 和 nums2 中所有元素是唯一的。
2. nums1 和 nums2  的数组大小都不超过 1000。

### My Solution

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const hashMap = new Map();
    const stack = [];
    const result = Array(nums1.length);
    for (let item of nums2) {
        while(stack.length && item > stack[stack.length - 1]) {
            hashMap.set(stack.pop(), item);
        }
        stack.push(item);
    }
    while(stack.length) {
        hashMap.set(stack.pop(), -1);
    }
    for (let item of nums1.entries()) {
        result[item[0]] = hashMap.get(item[1])
    }
    return result;
};
```

### 官方
单调栈
我们可以忽略`nums1`,先对将`nums2`中的每一个元素，求出其下一个更大对元素。随后对于将这些答案放入哈希映射（HashMap）中，再遍历数组`nums1`,并直接找出答案。对于`nums2`，我们可以使用单调栈来解决这个问题。

我们首先把第一个元素`nums2[0]`元素放入栈，随后对于第二个元素`nums2[1]`,如果`nums2[1] > nums1[0]`,那么我们就找到了`nums1[0]`下一个更大元素`nums2[1]`，此时就可以把`nums2[0]`出栈并把`nums2[1]`入栈；如果`nums2[1] <= nums1[0]`，我们就仅把`nums2[1]`入栈。对于第三个元素`nums2[2]`，此时栈中有若干个元素，那么所有比`nums2[2]`小的元素都找到了下一个更大元素的1（即`nums2[2]`）,因此可以出栈，在这之后，我们将`nums2[2]`入栈，一次类推。

可以发现，我们维护了一个单调栈，栈中的元素从栈顶到栈底是单调不降的。当我们遇到一个新的元素`nums2[i]`时候，我们判断栈顶元素是否小于`nums2[i]`，如果是，那么栈顶元素的下一个更大元素即为`nums2[i]`,我们栈顶元素出栈。重复这一操作，直到栈为空或者栈顶元素大于`nums2[i]`。此时我们将`nums2[i]`入栈，保持栈的单调性，并对接下来的`nums2[i + 1], nums2[i + 2]...`执行同样的操作。

##### 复杂度分析

- 时间复杂度：O(M+N)O(M+N)，其中 MM 和 NN 分别是数组 `nums1` 和 `nums2` 的长度。

- 空间复杂度：O(N)O(N)。我们在遍历 `nums2` 时，需要使用栈，以及哈希映射用来临时存储答案。

```java
public class Solution {
    public int[] nextGreaterElement(int[] findNums, int[] nums) {
        Stack < Integer > stack = new Stack < > ();
        HashMap < Integer, Integer > map = new HashMap < > ();
        int[] res = new int[findNums.length];
        for (int i = 0; i < nums.length; i++) {
            while (!stack.empty() && nums[i] > stack.peek())
                map.put(stack.pop(), nums[i]);
            stack.push(nums[i]);
        }
        while (!stack.empty())
            map.put(stack.pop(), -1);
        for (int i = 0; i < findNums.length; i++) {
            res[i] = map.get(findNums[i]);
        }
        return res;
    }
}
```
