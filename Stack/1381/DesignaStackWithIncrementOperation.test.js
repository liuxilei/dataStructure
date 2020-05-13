const CustomStack = require("./DesignaStackWithIncrementOperation");

describe("设计一个支持增量操作的栈", () => {
    test("CustomStack", () => {
        const customStack = new CustomStack(3);
        expect(customStack.stack).toEqual([]);
        customStack.push(1); 
        customStack.push(2); 
        expect(customStack.stack).toEqual([1, 2]);
        customStack.pop(); 
        expect(customStack.stack).toEqual([1]);
        customStack.push(2);
        customStack.push(3);
        customStack.push(4);
        expect(customStack.stack).toEqual([1, 2, 3]);
        customStack.increment(5, 100);
        expect(customStack.stack).toEqual([101, 102, 103]);
        customStack.increment(2, 100);
        expect(customStack.stack).toEqual([201, 202, 103]);
        customStack.pop(); 
        expect(customStack.stack).toEqual([201, 202]);
        customStack.pop(); 
        expect(customStack.stack).toEqual([201]);
        customStack.pop();
        expect(customStack.stack).toEqual([]);
        expect(customStack.pop()).toBe(-1);
    });
});