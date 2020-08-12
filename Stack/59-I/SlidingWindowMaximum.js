/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let maxSlides = [];
    const getMax = (arr, index, k) => {
        let result = [];
        for (let i = 0; i < k; i++) {
            if (typeof arr[index + i] === 'number') {
                result.push(arr[index + i]);
            }
        }
        if (result.length === k) {
            return Math.max(...result);
        } else {
            return null;
        }
    };
    for (let i = 0; i < nums.length; i++) {
        let currentMax = getMax(nums, i, k);
        if (currentMax) {
            maxSlides.push(currentMax);
        }
    }
    return maxSlides;
};

module.exports = maxSlidingWindow;
