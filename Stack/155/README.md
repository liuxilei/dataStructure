## Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

-   push(x) -- Push element x onto stack.
-   pop() -- Removes the element on top of the stack.
-   top() -- Get the top element.
-   getMin() -- Retrieve the minimum element in the stack.

**Example 1:**

    Input
    ["MinStack","push","push","push","getMin","pop","top","getMin"]
    [[],[-2],[0],[-3],[],[],[],[]]

    Output
    [null,null,null,null,-3,null,0,-2]

    Explanation
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); // return -3
    minStack.pop();
    minStack.top();    // return 0
    minStack.getMin(); // return -2

**Constraints:**

Methods pop, top and getMin operations will always be called on `non-empty` stacks.

---

## 最小栈

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

-   push(x) —— 将元素 x 推入栈中。
-   pop() —— 删除栈顶的元素。
-   top() —— 获取栈顶元素。
-   getMin() —— 检索栈中的最小元素。

示例:

    输入：
    ["MinStack","push","push","push","getMin","pop","top","getMin"]
    [[],[-2],[0],[-3],[],[],[],[]]

    输出：
    [null,null,null,null,-3,null,0,-2]

    解释：
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();   --> 返回 -3.
    minStack.pop();
    minStack.top();      --> 返回 0.
    minStack.getMin();   --> 返回 -2.

提示：

-   pop、top 和 getMin 操作总是在 `非空栈` 上调用。

### My Solution

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length > 0) {
        return this.stack.pop();
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1];
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.stack.length > 0) {
        return this.stack.reduce((value, currentVlue) =>
            value > currentVlue ? currentVlue : value,
        );
    } else {
        return null;
    }
};
```

### others

```javascript
var MinStack = function () {
    this.items = [];
    this.min = null;
};

// 进栈
MinStack.prototype.push = function (x) {
    if (!this.items.length) this.min = x;
    this.min = Math.min(x, this.min);
    this.items.push(x);
};

// 出栈
MinStack.prototype.pop = function () {
    let num = this.items.pop();
    this.min = Math.min(...this.items);
    return num;
};

// 获取栈顶元素
MinStack.prototype.top = function () {
    if (!this.items.length) return null;
    return this.items[this.items.length - 1];
};

// 检索栈中的最小元素
MinStack.prototype.getMin = function () {
    return this.min;
};
```
