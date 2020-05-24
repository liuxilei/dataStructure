const minRemoveToMakeValid = require("./minRemoveToMakeValid");

describe("移除无效的括号", () => {
    test("minRemoveToMakeValid", () => {
        expect(["lee(t(c)o)de", "lee(t(co)de)", "lee(t(c)ode)"]).toEqual(
            expect.arrayContaining([minRemoveToMakeValid("lee(t(c)o)de)")])
        )
        expect(minRemoveToMakeValid("a)b(c)d")).toBe("ab(c)d");
        expect(minRemoveToMakeValid("))((")).toBe("");
        expect(minRemoveToMakeValid("(a(b(c)d)")).toBe("a(b(c)d)");
    });
});