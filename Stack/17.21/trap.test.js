const trap = require("./trap");

describe("直方图的水量", () => {
    test("trap", () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
    });
});