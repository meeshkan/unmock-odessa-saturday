import foo from "../src/oleh-buria-api";
import * as unmock from "unmock-node";

beforeAll(() => {
    unmock.on();
})

test("my-api-works", async () => {
    const res = await foo();
    expect(Object.keys(res)).toEqual(['hello']);
})
