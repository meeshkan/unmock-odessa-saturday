
import shdw from '../src/libshdw';

test("Magic js+", () => {
  expect("1" + "0").toBe("10");
})


test("Fixed magic js+", () => {
  expect(shdw("1","0")).toBe(1);
})
