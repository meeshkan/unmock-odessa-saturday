import foo from "../src/ana";

test("should add two numbers", () => {
    //expect(2+2).toBe(4);
    expect(foo(2,2)).toBe(4);
})