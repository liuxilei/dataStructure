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

module.exports = nextGreaterElements;