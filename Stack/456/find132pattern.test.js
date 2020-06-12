const find132pattern = require("./find132pattern");

describe("132模式", () => {
    test("find132pattern", () => {
        expect(find132pattern([1, 2, 3, 4])).toBe(false);
        expect(find132pattern([3, 1, 4, 2])).toBe(true);
        expect(find132pattern([-1, 3, 2, 0])).toBe(true);
    });
});