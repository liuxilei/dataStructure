const minOperations = require("./minOperations");

describe("文件夹操作日志搜集器", () => {
    test(`logs = ["d1/","d2/","../","d21/","./"]`, () => {
        expect(minOperations(["d1/","d2/","../","d21/","./"])).toBe(2);
    });
    test(`logs = ["d1/","d2/","./","d3/","../","d31/"]`, () => {
        expect(minOperations(["d1/","d2/","./","d3/","../","d31/"])).toBe(3);
    });
    test(`logs = ["d1/","../","../","../"]`, () => {
        expect(minOperations(["d1/","../","../","../"])).toBe(0);
    });
});