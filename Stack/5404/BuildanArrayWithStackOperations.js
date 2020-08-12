/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let temp = [];
    let operate = [];
    for (let i = 1; i <= n; i++) {
        temp.push(i);
        operate.push('Push');
    }
    for (let i = 0; i < target.length; i++) {
        (function f(i) {
            if (target[i] !== temp[i]) {
                operate[temp[i] - 1] = 'Push,Pop';
                temp.splice(i, 1);
                f(i);
            }
        })(i);
    }
    operate.length = target[target.length - 1];
    return operate.join(',').split(',');
};

module.exports = buildArray;
