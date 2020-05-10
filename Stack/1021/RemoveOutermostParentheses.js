//删除最外层的括号

//我的实现
//解题思路
//定义一个栈，依次向栈内塞元素，每当（）成对的时候取出，判定栈是否为空，如果为空，即收集到一个原语，然后继续下去。
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let stack = [];
    let targetList = [];
    //记录上次截取的位置
    let primitivePosition = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "(") {
            stack.push(S[i]);
        } else {
            stack.pop();
            if (stack.length === 0) {
                let currentPrimitive = S.substring(primitivePosition, i + 1);
                primitivePosition = i + 1;
                targetList.push(currentPrimitive.substring(1, currentPrimitive.length - 1));
            }
        }
    }
    return targetList.join("");
};
module.exports = removeOuterParentheses;

//others
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses2 = function (S) {
    let len = S.length,
        l = 0,
        r = 0,
        ret = '';
    let stack = [];
    for (let i = 0; i < len; i++) {
        if (stack.length == 0) {
            stack.push(S[i])
            l = i;
        } else {
            if (S[i] == ')') {
                stack.pop()
                if (stack.length == 0) {
                    r = i;
                    // substring(start,end)  切割的为[start,end)
                    ret += S.substring(l + 1, r);
                }
            } else {
                stack.push(S[i])
            }
            // console.log(stack)
        }
    }
    return ret
};

