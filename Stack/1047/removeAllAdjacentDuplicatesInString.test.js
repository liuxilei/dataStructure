const removeDuplicates = require("./removeAllAdjacentDuplicatesInString");

describe("删除字符串中的所有相邻重复项方法测试", () => {
    test("removeDuplicates方法", () => {
        expect(removeDuplicates("abbaca")).toBe("ca");
        expect(removeDuplicates("dahdajbeeada")).toBe("dahdajbada");
    });
});