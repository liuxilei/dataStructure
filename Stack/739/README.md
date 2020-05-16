## Daily Temperatures

Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

**Note:** The length of `temperatures` will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.

--- 

## 每日温度

根据每日 `气温` 列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 `0` 来代替。

例如，给定一个列表 `temperatures = [73, 74, 75, 71, 69, 72, 76, 73]`，你的输出应该是 `[1, 1, 4, 2, 1, 1, 0, 0]`。

**提示：** 气温 列表长度的范围是 `[1, 30000]`。每个气温的值的均为华氏度，都是在 `[30, 100]` 范围内的整数。

### My Solution

```javascript
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const stack = [];
    for (let i = 0;i < T.length;i++) {
        for (let j = i;j < T.length;j++) {
            if (T[j] > T[i]) {
                stack.push(j - i);
                break;
            } else if (j === T.length - 1) {
                stack.push(0);
            }
        }
    }
    return stack;
};
```

### Others

```javascript
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let res = new Array(T.length).fill(0);
    let stack = [];
    for(let i = 0; i < T.length; i++) {
        while(stack.length && T[i] > T[stack[stack.length - 1]]) {
            let topIdx = stack.pop();
            res[topIdx] = i - topIdx;
        }
        stack.push(i);
    }
    return res;
};
```