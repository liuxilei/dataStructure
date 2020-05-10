const MyStack = require("./ImplementStackUsingQueues");

describe("用队列实现栈测试", () => {
    test("push、top、pop、empty方法测试", () => {
        const stack = new MyStack();
        stack.push(1);
        stack.push(2);
        expect(stack.top()).toBe(2);
        expect(stack.pop()).toBe(2);
        expect(stack.empty()).toBe(false);
    });
});