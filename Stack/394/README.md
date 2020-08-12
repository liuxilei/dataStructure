## Decode String

Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the encoded_string inside the square brackets is being repeated exactly `k` times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like `3a` or `2[4]`.

**Examples:**

    s = "3[a]2[bc]", return "aaabcbc".
    s = "3[a2[c]]", return "accaccacc".
    s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

---

## 字符串解码

给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: `k[encoded_string]`，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像  `3a`  或  `2[4]`  的输入。

**示例:**

    s = "3[a]2[bc]", 返回 "aaabcbc".
    s = "3[a2[c]]", 返回 "accaccacc".
    s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".

## Others

```javascript
function convertString(str) {
    const reg = /(\d+)\[([^\[\]]+)\]/g;
    const res = str.replace(reg, (match, p1, p2) => p2.repeat(p1));
    return reg.test(res) ? convertString(res) : res;
}
```

```javascript
/**
 * 答案二: 精简模式，用reduce实现
 */
function convertString(str) {
    const TYPES = { NU: 1, CH: 2, LB: 3, RB: 4, '[': 3, ']': 4 };
    const { NU, CH, LB, RB } = TYPES;
    const type = (str) => (TYPES[str[0]] || isNaN(str[0]) ? CH : NU);
    return str
        .split('')
        .reduce(
            ({ stack, tmp, prevType }, ch) => {
                const t = type(ch);
                if (tmp && t !== prevType) {
                    stack.push(tmp);
                    tmp = '';
                }
                if (t === RB) {
                    let str = '';
                    let lb;
                    while ((lb = stack.pop()) !== '[') str = `${lb}${str}`;
                    stack.push(str.repeat(+stack.pop()));
                } else if (t === LB) {
                    stack.push('[');
                } else {
                    tmp += ch;
                }
                return { stack, tmp, prevType: t };
            },
            { stack: [], tmp: '', prevType: null },
        )
        .stack.join('');
}
```

```javascript
/**
 * 答案三：健壮模式，可读性更好
 * 增加健壮性:
 * 1）括号中可能出现无内容的情况: 'a2[]b' => 'ab'
 * 2) str由字母或数字组成: '2[13]' => '1313'
 * 3) 会存在左括号前不是数字的情况: 'a[bc]' => 'abc'
 * 4) 括号未配对时抛出异常
 */
function convertString(str) {
    const TYPES = {
        NU: 'NUMBER',
        CH: 'CHAR',
        LB: 'LEFT_BRACKET',
        RB: 'RIGHT_BRACKET',
        '[': 'LEFT_BRACKET',
        ']': 'RIGHT_BRACKET',
    };

    const { NU, CH, LB, RB } = TYPES;
    const type = (str) => (TYPES[str[0]] || isNaN(str[0]) ? CH : NU);
    const stack = [];
    let tmp = '';
    let prevType = null;
    str.split('').forEach((ch) => {
        const t = type(ch);
        if (tmp && t !== prevType) {
            stack.push(tmp);
            tmp = '';
        }
        // 出栈配对
        if (t === RB) {
            let str = '';
            let lb = stack.pop();
            while (lb !== '[') {
                if (!lb) throw new Error('括号未配对');
                str = `${lb}${str}`;
                lb = stack.pop();
            }
            const num = stack.pop();
            if (+num >= 0) {
                stack.push(str.repeat(+num)); // 正常情况. num是数字:  2[a] => aa
            } else if (num === '[') {
                stack.push('['); // 异常情况. num是左括号'[': [[a] => [a
                stack.push(str);
            } else if (num) {
                stack.push(`${num}${str}`); // 异常情况. num是字母: a[b] => ab
            } else {
                stack.push(str); // 异常情况. num是undefined: '[b]' => 'b'
            }
        } else if (t === LB) {
            stack.push('[');
        } else {
            tmp += ch;
        }
        prevType = t;
    });
    return stack.join('');
}
```

## 思路

思路括号匹配类型的问题，很适合用栈来解决

从前往后遍历，遇到 \[0-9]\ ，判定为乘数，需要兼容多位数的场景，进行累加

遇到 [ 结束乘数的位数累加，并将乘数转换为 number 类型并放进栈中

遇到字母直接入栈

遇到 ] 时，while 循环从栈中取值，直到取出的值类型为 number 类型，此时取到的 temp 为最小单位 [...] ，curr 为 [..] 之前的乘数

将重复之后的字符串推进栈中，继续往后遍历

```javascript
/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */
/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function (s) {
    let stack = []; // 保存需要 repeat 的字符串
    let times = ''; // 乘以的倍数

    for (let i = 0, len = s.length; i < len; i++) {
        let item = s[i];

        if (/[0-9]/.test(item)) {
            if (i === 0 || /[0-9]/.test(s[i - 1])) {
                times += item;
            } else {
                times = item;
            }
        } else if (item === '[') {
            times && stack.push(Number(times));
            times = '';
        } else if (item === ']') {
            var curr = stack.pop();
            var temp = '';
            while (typeof curr !== 'number') {
                temp = curr + temp;
                curr = stack.pop();
            }
            temp = temp.repeat(curr);
            stack.push(temp);
        } else {
            stack.push(item);
        }
    }
    return stack.join('');
};
```
