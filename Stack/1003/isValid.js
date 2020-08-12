var isValid = function (S) {
    const stack = [];
    for (let i = 0; i < S.length; i++) {
        let item = S[i];
        if (stack[stack.length - 1] === 'b' && stack[stack.length - 2] === 'a' && item === 'c') {
            stack.pop();
            stack.pop();
        } else {
            stack.push(item);
        }
    }
    return stack.length === 0;
};

module.exports = isValid;
