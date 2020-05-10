const buildArray = require("./BuildanArrayWithStackOperations");

describe("用栈操作构建数组", () => {
    test("buildArray", () => {
        let target = [1, 3], n = 3;
        expect(buildArray(target, n)).toEqual(["Push", "Push", "Pop", "Push"]);
    });

    test("buildArray", () => {
        let target = [1, 2, 3], n = 3;
        expect(buildArray(target, n)).toEqual(["Push", "Push", "Push"]);
    });

    test("buildArray", () => {
        let target = [1, 2], n = 4;
        expect(buildArray(target, n)).toEqual(["Push", "Push"]);
    });

    test("buildArray", () => {
        let target = [2, 3, 4], n = 4;
        expect(buildArray(target, n)).toEqual(["Push","Pop","Push","Push","Push"]);
    });
});