import { fecthData } from './api-call';
import * as unmock from "unmock-node";

beforeAll(() => {
    unmock.on();
});

test("my-api-works", async () => {
    const res = await fecthData();
    expect(Object.keys(res)).toEqual(['name']);
};