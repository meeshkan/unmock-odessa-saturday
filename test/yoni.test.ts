import add from "../src/yoni.add";
import foo from "../src/yoni.network.call";
import * as unmock from "unmock-node";

beforeAll(() => {
    unmock.on();
})

test("my-api-works-well", async () => {
    const res = await foo();
    expect(Object.keys(res)).toEqual(['hello']);
}) 
