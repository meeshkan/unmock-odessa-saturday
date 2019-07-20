import foo from "../src/mike";
test("2+2 equals 4", () => {
    expect(foo(2,2)).toBe(4);
})