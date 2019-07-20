test("should add two numbers", () => {
    expect(2+2).toBe(4);
})

import foo from "../src/mike-api";

test("my-api-works", async () => {
    const res = await foo();
    expect(Object.keys(res)).toEqual(['hello']);
}) 