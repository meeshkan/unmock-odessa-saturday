import { fecthData } from './api-call';

test("my-api-works", async () => {
  const dataMock = {items: [1,2,3]};
  const res = await fecthData();
  expect(res).toEqual(dataMock);
});