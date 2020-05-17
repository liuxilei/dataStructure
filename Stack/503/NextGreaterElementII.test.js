const nextGreaterElements = require("./NextGreaterElementII");

describe("下一个更大元素 II", () => {
    test("nextGreaterElements", () => {
        expect(nextGreaterElements([1,2,1])).toEqual([2,-1,2]);
        expect(nextGreaterElements([4,3,5,9,1])).toEqual([5, 5, 9, -1, 4]);
        expect(nextGreaterElements([5, 3, 2, 1])).toEqual([-1, 5, 5, 5]);
    })
});