const exclusiveTime = require("./exclusiveTime");

describe("函数的独占时间", () => {
    test("exclusiveTime", () => {
        expect(exclusiveTime(1,["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"])).toEqual([8]);
        expect(exclusiveTime(2, ["0:start:0","1:start:2","1:end:5","0:end:6"])).toEqual([3, 4]);
        expect(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:7","1:end:7","0:end:8"])).toEqual([8, 1]);
        expect(exclusiveTime(1, ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5"])).toEqual([6]);
    });
});