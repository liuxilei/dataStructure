const sumSubarrayMins = require("./sumSubarrayMins");

describe("子数组的最小值之和", () => {
    test("sumSubarrayMins", () => {
        expect(sumSubarrayMins([3,1,2,4])).toBe(17);
    });
});