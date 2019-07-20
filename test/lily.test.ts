import pow from './src/lily';
import getUsers from './src/lily-api';
import * as unmock from "unmock-node";

beforeAll(() => {
  unmock.on();
});

test("check if pow works", () => {
  expect(pow(2,3)).toEqual(8);
});

test("fake API call that fails", async () => {
  const users = await getUsers();

  expect(Object.keys(users)).toEqual(['users']);
});