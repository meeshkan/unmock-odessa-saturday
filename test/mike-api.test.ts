import foo from "../src/mike-api";
import * as unmock from "unmock-node";

let state: any;

beforeEach(() => {
    state = unmock.on();
})

afterEach(() => {
    state = unmock.off();
})

test("my-api-works", async () => {
    state.foo('/hello', { $code: 200 })
    const res = await foo();
    expect(Object.keys(res)).toEqual(['hello']);
})

test("my-api-does-not-work", async () => {
    state.foo('/hello', { $code: 400 })
    try {
        const res = await foo();
        expect("should have thrown").toBe(true);
    } catch {
    }
})