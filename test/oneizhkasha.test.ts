
import shdw from '../src/libshdw';
import {api} from '../src/libshdw';

test("Magic js+", () => {
  expect("1" + "0").toBe("10");
})


test("Fixed magic js+", () => {
  expect(shdw("1","0")).toBe(1);
})


test("Test fail", async () => {
  const result = await api("ID");
  expect(result).toBe("somethng");
})