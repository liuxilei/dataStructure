var removeDuplicates = function (s, k) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        if (stack[stack.length - 1] && item === stack[stack.length - 1].split('')[0]) {
            stack[stack.length - 1] += item;
            if (stack[stack.length - 1] === stack[stack.length - 1].split('')[0].repeat(k)) {
                stack.pop();
            }
        } else {
            stack.push(item);
        }
    }
    return stack.join('');
};

module.exports = removeDuplicates;
