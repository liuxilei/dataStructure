const reverseParentheses = require("./reverseParentheses");

describe("反转每对括号间的子串", () => {
    test("reverseParentheses", () => {
        expect(reverseParentheses("(abcd)")).toBe("dcba");
        expect(reverseParentheses("(u(love)i)")).toBe("iloveu");
        expect(reverseParentheses("(ed(et(oc))el)")).toBe("leetcode");
        expect(reverseParentheses("a(bcdefghijkl(mno)p)q")).toBe("apmnolkjihgfedcbq");
    })
})