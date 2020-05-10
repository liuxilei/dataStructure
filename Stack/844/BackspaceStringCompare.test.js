const backspaceCompare = require("./BackspaceStringCompare");

describe("比较含退格的字符串", () => {
    test("backspaceCompare", () => {
        const S = "ab#c";
        const T = "ad#c";
        expect(backspaceCompare(S, T)).toBe(true);
    });

    test("backspaceCompare", () => {
        const S = "ab##";
        const T = "c#d#";
        expect(backspaceCompare(S, T)).toBe(true);
    });

    test("backspaceCompare", () => {
        const S = "a##c";
        const T = "#a#c";
        expect(backspaceCompare(S, T)).toBe(true);
    });

    test("backspaceCompare", () => {
        const S = "a#c";
        const T = "b";
        expect(backspaceCompare(S, T)).toBe(false);
    });
});