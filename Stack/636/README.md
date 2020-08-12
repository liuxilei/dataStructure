## Exclusive Time of Functions

On a `single threaded` CPU, we execute some functions.  Each function has a unique id between `0` and `N-1`.

We store logs in timestamp order that describe when a function is entered or exited.

Each log is a string with this format: `"{function_id}:{"start" | "end"}:{timestamp}"`.  For example, `"0:start:3"` means the function with id `0` **started at the beginning** of timestamp `3`.  `"1:end:2"` means the function with id `1` **ended at the end** of timestamp 2.

A function's exclusive time is the number of units of time spent in this function.  Note that this does **not** include any recursive calls to child functions.

The CPU is `single threaded` which means that only one function is being executed at a given time unit.

Return the exclusive time of each function, sorted by their function id.

**Example 1:**

![example](./example.png)

    Input:
    n = 2
    logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
    Output: [3, 4]
    Explanation:
    Function 0 starts at the beginning of time 0, then it executes 2 units of time and reaches the end of time 1.
    Now function 1 starts at the beginning of time 2, executes 4 units of time and ends at time 5.
    Function 0 is running again at the beginning of time 6, and also ends at the end of time 6, thus executing for 1 unit of time.
    So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.

**Note:**

1. 1 <= n <= 100
2. Two functions won't start or end at the same time.
3. Functions will always log when they exit.

## My Solution

#### 思路

思路可以参考[leetcode 官方](https://leetcode-cn.com/problems/exclusive-time-of-functions/solution/han-shu-de-du-zhan-shi-jian-by-leetcode/) 我们可以使用栈来模拟函数的调用，即在遇到一条包含 start 的日志时，我们将对应的函数 id 入栈；在遇到一条包含 end 的日志时，我们将对应的函数 id 出栈。在每一个时刻，栈中的所有函数均为被调用的函数，而栈顶的函数为正在执行的函数。

在每条日志的时间戳后，栈顶的函数会独占执行，直到下一条日志的时间戳，因此我们可以根据相邻两条日志的时间戳差值，来计算函数的独占时间。我们依次遍历所有的日志，对于第 i 条日志，如果它包含 start，那么栈顶函数从其时间戳 time[i] 开始运行，即 prev = time[i]；如果它包含 end，那么栈顶函数从其时间戳 time[i] 的下一个时间开始运行，即 prev = time[i] + 1。对于第 i + 1 条日志，如果它包含 start，那么在时间戳 time[i + 1] 时，有新的函数被调用，因此原来的栈顶函数的独占时间为 time[i + 1] - prev；如果它包含 end，那么在时间戳 time[i + 1] 时，原来的栈顶函数执行结束，独占时间为 time[i + 1] - prev + 1。在这之后，我们更新 prev 并遍历第 i + 2 条日志。在遍历结束后，我们就可以得到所有函数的独占时间。

注意：不要看中文翻译，最好看英文，感觉中文解释有问题。

```javascript
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
```
