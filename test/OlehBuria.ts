import testFunc from "../src/OlehBuriaFunc";
test("string + number = string", () => {
    expect(testFunc("2", 3)).toBe("23");
});
