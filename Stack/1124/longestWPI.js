/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    let prefixSum = new Array(hours.length + 1).fill(0);
    for (let i = 1;i <= hours.length;i++) {
        if (hours[i- 1] > 8) {
            prefixSum[i] = prefixSum[i - 1] + 1;
        } else {
            prefixSum[i] = prefixSum[i - 1] - 1;
        }
    }

    let max = 0;
    for (let i = 0;i < prefixSum.length - 1;i++) {
        for (let j = i + 1;j < prefixSum.length;j++) {
            if (prefixSum[j] - prefixSum[i] > 0) {
                max = Math.max(max, j - i);
            }
        }
    }
    return max;
};

module.exports = longestWPI;