//题目：棒球比赛

//my solution

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let stack = [];
    for (let i = 0; i < ops.length; i++) {
        if (["+", "D", "C"].includes(ops[i])) {
            if (ops[i] === "+") {
                stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
            } else if (ops[i] === "D") {
                stack.push(2 * stack[stack.length - 1]);
            } else if (ops[i] === "C") {
                stack.pop();
            }
        } else {
            stack.push(Number(ops[i]));
        }
    }
    return stack.reduce((prev, cur) => prev + cur);
};

module.exports = calPoints;

//others
var calPoints2 = function (ops) {
    let arr = [];
    let opera = {
        "+": function () {
            let total = arr.length > 1 ? Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]) : arr[0];
            arr.push(total);
        },
        "D": function () {
            arr.length && arr.push(arr[arr.length - 1] * 2)
        },
        "C": function () {
            arr.pop();
        },
        'in': function (item) {
            arr.push(item);
        }
    };

    ops.forEach((item) => {
        if (item in opera) {
            opera[item]();
        } else {
            opera.in(item);
        }
    })
    return arr.reduce((total, num) => Number(total) + Number(num))
};

