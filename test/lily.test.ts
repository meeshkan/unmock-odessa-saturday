import pow from './src/lily';
import getUsers from './src/lily-api';

test("check if pow works", () => {
  expect(pow(2,3)).toEqual(8);
});

test("fake API call that fails", async () => {
  const result = await getUsers();
  expect(result).toEqual({ "name": "Some name" });
});