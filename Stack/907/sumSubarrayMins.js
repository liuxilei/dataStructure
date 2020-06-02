/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {
    const sonArrs = [];
    for (let i = 0; i < A.length; i++) {
        for (let k = 0; k < A.length - i + 1; k++) {
            let tempArr = A.slice(k, k + i + 1);
            if (tempArr.length === i + 1) {
                sonArrs.push(tempArr);
            }
        }
    }
    sonArrs.map((item, index) => {
        sonArrs[index] = Math.min(...item);
    });
    return sonArrs.reduce((accumulator, currentValue) => accumulator + currentValue);
};

module.exports = sumSubarrayMins;