const calPoints = require("./BaseballGame");

describe("棒球比赛", () => {
    test("calPoints方法测试", () => {
        expect(calPoints(["5","2","C","D","+"])).toBe(30);
        expect(calPoints(["5","-2","4","C","D","9","+","+"])).toBe(27);
    });
})