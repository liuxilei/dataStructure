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
        leftMax = height[left],
        rightMax = height[right],
        res = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            res += leftMax - height[left++];
            leftMax = Math.max(height[left], leftMax);
        } else {
            res += rightMax - height[right--];
            rightMax = Math.max(height[right], rightMax);
        }
    }

    return res;
};

module.exports = trap;
