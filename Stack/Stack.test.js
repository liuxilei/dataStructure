const Stack = require("./Stack");

describe("js实现的模拟栈功能测试", () => {
    test("isEmpty方法", () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });

    test("peek方法", () => {
        const stack = new Stack();
        stack.push(5);
        stack.push(8);
        expect(stack.peek()).toBe(8);
    });

    test("size方法", () => {
        const stack = new Stack();
        stack.push(5);
        stack.push(8);
        stack.push(11);
        expect(stack.size()).toBe(3);
        expect(stack.isEmpty()).toBe(false);
    });

    test("pop方法", () => {
        const stack = new Stack();
        stack.push(5);
        stack.push(8);
        stack.push(11);
        stack.push(15);
        stack.pop();
        stack.pop();
        expect(stack.size()).toBe(2);
    });

    test("clear方法", () => {
        const stack = new Stack();
        stack.push(5);
        stack.push(8);
        stack.push(11);
        stack.push(15);
        stack.pop();
        stack.pop();
        stack.clear()
        expect(stack.size()).toBe(0);
    });
});