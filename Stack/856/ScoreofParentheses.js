var scoreOfParentheses = function (S) {
    const stack = [];
    for (let i = 0;i < S.length;i++) {
        let item = S[i];
        if (item === "(") {
            stack.push(item);
        }
        if (item === ")") {
            let num = 0;
            if (stack[stack.length - 1] === "(") {
                stack.pop();
                stack.push(1);
            } else {
                let temp = stack.pop();
                while(temp !== "(") {
                    num += temp;
                    temp = stack.pop();
                }
            }
            stack.push(2 * num);
        }
    }
    let sum = 0;
    sum = stack.reduce((acc, cur) => acc + cur, sum);
    return sum;
};

module.exports = scoreOfParentheses;