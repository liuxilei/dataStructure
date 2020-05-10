//比较含退格的字符串

//My solution
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let stack1 = [];
    let stack2 = [];
    for (let i = 0;i < S.length;i++) {
        if (S[i] === "#") {
            stack1.pop();
        } else {
            stack1.push(S[i]);
        }
    }
    for (let i = 0;i < T.length;i++) {
        if (T[i] === "#") {
            stack2.pop();
        } else {
            stack2.push(T[i]);
        }
    }
    return stack1.join("") === stack2.join("");
};

module.exports = backspaceCompare;

//others
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare2 = function(S, T) {
    let reg = /[a-z](?=\#)\#/g;
    S = S.replace(/^\#/,'').replace(reg, '');
    T = T.replace(/^\#/,'').replace(reg, '');
    if(!S.includes('#') && !T.includes('#')){
        return S == T;
    }
    return backspaceCompare(S, T);
};