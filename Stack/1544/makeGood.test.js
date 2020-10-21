const makeGood = require("./makeGood");

describe("整理字符串", () => {
    test("s = 'leEeetcode'", () => {
        expect(makeGood("leEeetcode")).toBe("leetcode")
    });
    test("s = 'abBAcC'", () => {
        expect(makeGood("abBAcC")).toBe("")
    });
    test(`s = "s"`, () => {
        expect(makeGood("s")).toBe("s")
    });
});