/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    const stack = [];
    //对应栈id当前操作时间戳
    const funcTime = Array(n).fill(0);
    //对应不同栈历史耗时
    const funcSumTime = [];
    for (let i = 0; i < n; i++) {
        funcSumTime[i] = [];
    }
    let prev = 0;
    for (let i = 0; i < logs.length; i++) {
        let item = logs[i].split(':');
        item[0] = Number(item[0]);
        item[2] = Number(item[2]);
        if (item[1] === 'start') {
            if (stack.length) {
                //funcTime[stack[stack.length - 1]] += item[2] - prev;
                funcSumTime[stack[stack.length - 1]].push(item[2] - prev);
            }
            stack.push(item[0]);
            funcTime[item[0]] = item[2];
            prev = item[2];
            //console.log("start", item, stack, funcTime, JSON.stringify(funcSumTime));
        } else if (item[1] === 'end') {
            funcTime[stack[stack.length - 1]] = item[2] - prev + 1;
            funcSumTime[stack[stack.length - 1]].push(funcTime[stack[stack.length - 1]]);
            stack.pop();
            prev = item[2] + 1;
            //console.log("end", item, stack, funcTime, JSON.stringify(funcSumTime));
        }
    }
    return funcSumTime.map((item, index) => {
        return funcSumTime[index].reduce((accumulator, currentValue) => accumulator + currentValue);
    });
};

module.exports = exclusiveTime;
