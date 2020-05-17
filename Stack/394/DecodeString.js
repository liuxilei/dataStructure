/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function convertString (str) {
    const reg = /(\d+)\[([^\[\]]+)\]/g;
    const res = str.replace(reg, (match, p1, p2) => p2.repeat(p1));
    return reg.test(res) ? convertString(res) : res;
};

module.exports = decodeString;