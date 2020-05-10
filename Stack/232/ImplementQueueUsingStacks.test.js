const MyQueue = require("./ImplementQueueUsingStacks");

describe("用栈实现队列", () => {
    test("MyQueue构造函数", () => {
        const queue = new MyQueue();
        queue.push(1);
        queue.push(2);  
        expect(queue.peek()).toBe(1);  // 返回 1
        expect(queue.pop()).toBe(1);   // 返回 1
        expect(queue.empty()).toBe(false); // 返回 false
    });
});