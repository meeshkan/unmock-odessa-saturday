import foo from "../src/mike-api";

test("my-api-works", async () => {
    const res = await foo();
    expect(Object.keys(res)).toEqual(['hello']);
})