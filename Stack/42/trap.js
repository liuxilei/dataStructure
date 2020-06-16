/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height < 3) {
        return 0;
    }

    let left = 0,
        right = height.length - 1,
        res = 0,
        leftMax = height[left],
        rightMax = height[right];
    while (left < right) {
        if (leftMax < rightMax) {
            res += leftMax - height[left++];
            leftMax = Math.max(leftMax, height[left]);
        } else {
            res += rightMax - height[right--];
            rightMax = Math.max(rightMax, height[right]);
        }
    }
    return res;
};

module.exports = trap;