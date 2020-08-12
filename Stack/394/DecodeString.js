/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const isNumber = (val) => /[0-9]/.test(val);
    const stack = [];
    let times = '';
    for (let i = 0, len = s.length; i < len; i++) {
        let item = s[i];
        if (isNumber(item)) {
            if (i === 0 || isNumber(s[i - 1])) {
                times += item;
            } else {
                times = item;
            }
        } else if (item === '[') {
            stack.push(Number(times));
            times = '';
        } else if (item === ']') {
            let cur = stack.pop();
            let temp = '';
            while (typeof cur !== 'number') {
                temp = cur + temp;
                cur = stack.pop();
            }
            temp = temp.repeat(cur);
            stack.push(temp);
        } else {
            stack.push(item);
        }
    }
    return stack.join('');
};

module.exports = decodeString;
