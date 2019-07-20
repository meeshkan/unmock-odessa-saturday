import foo from "../src/OlehBuriaApiTest";

test("my-api-works", async () => {
    const res = await foo();
    expect(Object.keys(res)).toEqual(['hello']);
})
