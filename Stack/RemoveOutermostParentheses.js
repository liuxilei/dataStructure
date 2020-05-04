//删除最外层的括号

//我的实现

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let result = [];
    let tempList = [];
    let primitivePosition = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "(") {
            result.push(S[i]);
        } else {
            result.pop();
            if (result.length === 0) {
                let currentPrimitive = S.substring(primitivePosition, i + 1);
                console.log(currentPrimitive)
                primitivePosition = i + 1;
                tempList.push(currentPrimitive.substring(1, currentPrimitive.length - 1));
            }
        }
    }
    return tempList.join("");
};

//others
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
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

