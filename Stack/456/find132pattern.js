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

module.exports = find132pattern;