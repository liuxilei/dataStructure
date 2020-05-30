const StockSpanner = require("./StockSpanner");

describe("股票价格跨度", () => {
    test("StockSpanner", () => {
        let S = new StockSpanner();
        expect(S.next(100)).toBe(1);
        expect(S.next(80)).toBe(1);
        expect(S.next(60)).toBe(1);
        expect(S.next(70)).toBe(2);
        expect(S.next(60)).toBe(1);
        expect(S.next(75)).toBe(4);
        expect(S.next(85)).toBe(6);
    });
});