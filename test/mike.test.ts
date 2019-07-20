describe("Test suite", () => {
    test("2+2 equals 4", () => {
        expect(2+2).toBe(4);
    });

    test("Array includes 0", () => {
        expect([0,1,2]).toContain(0);
    });
});
