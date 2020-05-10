const MinStack = require("./MinStack");

describe("最小栈测试组", () => {
    test("getMin方法测试", () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.getMin()).toBe(-3);
    });
    
    test("pop方法测试", () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.pop()).toBe(-3);
        expect(minStack.getMin()).toBe(-2);
    });

    test("top方法测试", () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        minStack.pop();
        expect(minStack.top()).toBe(0);
    });
});