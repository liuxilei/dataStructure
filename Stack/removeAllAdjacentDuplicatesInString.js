//删除字符串中的所有相邻重复项

//my solution

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = [];
    for (let i = 0;i < S.length;i++) {
        if (S[i] !== stack[stack.length - 1]) {
            stack.push(S[i]);
        } else {
            stack.pop();
        }
    }
    return stack.join("");
};

//others
var removeDuplicates = function(S) {
    let stack = []
    for(c of S) {
        let prev = stack.pop()
        if(prev !== c) {
            stack.push(prev)
            stack.push(c)
        }
    }
    return stack.join('')
};
