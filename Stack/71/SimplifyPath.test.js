const simplifyPath = require("./SimplifyPath");

describe("Simplify Path", () => {
    it("simplifyPath", () => {
        expect(simplifyPath("/home/")).toBe("/home");
        expect(simplifyPath("/../")).toBe("/");
        expect(simplifyPath("/home//foo/")).toBe("/home/foo");
        expect(simplifyPath("/a/./b/../../c/")).toBe("/c");
        expect(simplifyPath("/a/../../b/../c//.//")).toBe("/c");
        expect(simplifyPath("/a//b////c/d//././/..")).toBe("/a/b/c");
    });
})