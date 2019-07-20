
import shdw from '../src/libshdw';
import {api} from '../src/libshdw';
import * as unmock from "unmock-node";

beforeAll(() => {
    unmock.on();
})


test("Magic js+", () => {
  expect("1" + "0").toBe("10");
})


test("Fixed magic js+", () => {
  expect(shdw("1","0")).toBe(1);
})


test("Test API", async () => {
  const result = await api();
  expect(Object.keys(result)).toEqual(["name"]);
})