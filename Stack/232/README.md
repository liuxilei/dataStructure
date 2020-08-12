## Implement Queue using Stacks

Implement the following operations of a queue using stacks.

-   push(x) -- Push element x to the back of queue.
-   pop() -- Removes the element from in front of queue.
-   peek() -- Get the front element.
-   empty() -- Return whether the queue is empty.

**Example:**

    MyQueue queue = new MyQueue();

    queue.push(1);
    queue.push(2);
    queue.peek();  // returns 1
    queue.pop();   // returns 1
    queue.empty(); // returns false

**Notes:**

-   You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
-   Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
-   You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

### others

```javascript
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack1 = []; //数据都保存在stack1
    this.stack2 = []; //数据从stack1出栈进入stack2
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack2.length) {
        //如果stack2不为空，说明数据全都移入了stack2，直接pop操作移除stack2的最后一位即为stack1 的第一位
        return this.stack2.pop();
    } else {
        if (this.stack1.length) {
            //如果stack1不为空
            var len = this.stack1.length;
            for (var i = 0; i < len; i++) {
                this.stack2.push(this.stack1.pop()); //将元素全部移入到stack2
            }
            return this.stack2.pop(); //pop操作移除stack2的最后一位即为stack1 的第一位
        } else {
            return null;
        }
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.stack1.length == 0) {
        return this.stack2[this.stack2.length - 1];
    } else if (this.stack2.length == 0) return this.stack1[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.stack1.length == 0 && this.stack2.length == 0) {
        //只有当两个stack均为空的时候才能证明队列为空
        return true;
    } else {
        return false;
    }
};
```
