## Simplify Path

Given an **absolute path** for a file (Unix-style), simplify it. Or in other words, convert it to the **canonical path**.

In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double period .. moves the directory up a level.

Note that the returned canonical path must always begin with a slash `/`, and there must be only a single slash `/` between two directory names. The last directory name (if it exists) **must not** end with a trailing `/`. Also, the canonical path must be the **shortest** string representing the absolute path.

**Example 1:**

    Input: "/home/"
    Output: "/home"
    Explanation: Note that there is no trailing slash after the last directory name.

**Example 2:**

    Input: "/../"
    Output: "/"
    Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

**Example 3:**

    Input: "/home//foo/"
    Output: "/home/foo"
    Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

**Example 4:**

    Input: "/a/./b/../../c/"
    Output: "/c"

**Example 5:**

    Input: "/a/../../b/../c//.//"
    Output: "/c"

**Example 6:**

    Input: "/a//b////c/d//././/.."
    Output: "/a/b/c"

---

## 简化路径

以 Unix 风格给出一个文件的**绝对路径**，你需要简化它。或者换句话说，将其转换为规范路径。

在 Unix 风格的文件系统中，一个点（`.`）表示当前目录本身；此外，两个点 （`..`）  表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。更多信息请参阅：[Linux / Unix 中的绝对路径 vs 相对路径](https://blog.csdn.net/u011327334/article/details/50355600)

请注意，返回的规范路径必须始终以斜杠 / 开头，并且两个目录名之间必须只有一个斜杠 /。最后一个目录名（如果存在）不能以 / 结尾。此外，规范路径必须是表示绝对路径的`最短`字符串。

**示例 1：**

    输入："/home/"
    输出："/home"
    解释：注意，最后一个目录名后面没有斜杠。

**示例 2：**

    输入："/../"
    输出："/"
    解释：从根目录向上一级是不可行的，因为根是你可以到达的最高级。

**示例 3：**

    输入："/home//foo/"
    输出："/home/foo"
    解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。

**示例 4：**

    输入："/a/./b/../../c/"
    输出："/c"

**示例 5：**

    输入："/a/../../b/../c//.//"
    输出："/c"

**示例 6：**

    输入："/a//b////c/d//././/..
    输出："/a/b/c"

### My Solution

自己实现的过程完成正常条件的一个个满足，发现只能满足给的例子的测试用例，最终无法通过。虽然写了两个多小时，没能实现，但这个过程告诉我，我是真的阿西吧，囧。

```javascript
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const stack = [];
    for (let i = 0; i < path.length; i++) {
        //删除重复/
        if (path[i] === '/' && path[i - 1] === path[i]) {
            continue;
        }
        //删除./
        if (path[i - 2] !== '.' && path[i - 1] === '.' && path[i] === '/') {
            stack.pop();
            continue;
        }
        // 返回上一级../
        if (
            path[i - 2] === '/' &&
            path[i - 1] === '.' &&
            path[i - 1] === path[i] &&
            (!Boolean(path[i + 1]) || path[i + 1] !== '.')
        ) {
            let lastIndex1 = stack.join('').lastIndexOf('/');
            let lastIndex2 = stack.join('').lastIndexOf('/', lastIndex1 - 1);
            stack.splice(lastIndex2, lastIndex1 - lastIndex2 + 2);
            continue;
        }
        stack.push(path[i]);
    }
    if (!stack.join('').endsWith('...')) {
        if (stack[stack.length - 1] === '/' || stack[stack.length - 1] === '.') {
            stack.pop();
        }
    }
    if (stack.length === 0) {
        return '/';
    }
    return stack.join('');
};
```

## others

### 思路

将`path`以`'/'`分割成数组，如 `/a/./b/../../c/`分割成`[ '', 'a', '.', 'b', '..', '..', 'c', '' ]`。 新建一个栈`stack`为当前的路径，遍历`path`分割后的数组元素:

遇到正常的字母时，推入 `stack` 中遇到 `..` 时，`stack` 弹出最近一个路径遇到 `.` 或者为空时，不修改当前 `stack`。最后返回 `'/' + stack.join('/')` 为新的路径

```javascript
var simplifyPath = function (path) {
    const stack = [];
    const pathArr = path.split('/');

    for (let item of pathArr) {
        if (item === '' || item === '.') {
            continue;
        } else if (item === '..') {
            stack.pop();
        } else {
            stack.push(item);
        }
    }

    return '/' + stack.join('/');
};
```
