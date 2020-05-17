## Next Greater Element II

Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

**Example 1:**

    Input: [1,2,1]
    Output: [2,-1,2]
    Explanation: The first 1's next greater number is 2; 
    The number 2 can't find next greater number; 
    The second 1's next greater number needs to search circularly, which is also 2.

**Note:** The length of given array won't exceed 10000.

---

## 下一个更大元素 II

给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

**示例 1:**

    输入: [1,2,1]
    输出: [2,-1,2]
    解释: 第一个 1 的下一个更大的数是 2；
    数字 2 找不到下一个更大的数； 
    第二个 1 的下一个最大的数需要循环搜索，结果也是 2。

**注意:** 输入数组的长度不会超过 10000。


## My Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const stack = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        let item = nums[i];
        for (let temp = i === len - 1 ? 0 : i,j = temp; j < len; j++) {
            let target = nums[j];
            if (target > item) {
                stack.push(target);
                break;
            }
            if (j === len - 1 && target <= item) {
                if (temp === 0) {
                    stack.push(-1);
                } else {
                    for (let k = 0; k < temp; k++) {
                        let want = nums[k];
                        if (want > item) {
                            stack.push(want);
                            break;
                        }
                        if (k === temp - 1 && want <= item) {
                            stack.push(-1);
                        }
                    }
                }
            }
        }
    }
    return stack;
};
```

## Others 

思路： 原有数组多拼上一次原有数组

```javascript
var nextGreaterElements = function(nums) {
    const doubleNums=[...nums,...nums];
    const {length}=doubleNums;
    if(length===0) return doubleNums;
    let stack=[];
    let res=new Array(length).fill(-1);
    for(let i=0;i<length;i++){
        while(stack.length&&doubleNums[i]>doubleNums[stack[stack.length-1]]){
            let index=stack.pop();
            res[index]=doubleNums[i]
        }
        stack.push(i)
    }
    return res.slice(0,(res.length/2))
};
nextGreaterElements([1,2,1]);
```