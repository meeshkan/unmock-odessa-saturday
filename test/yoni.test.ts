describe('Yoni Goldberg Test', () => {
    test('When 2 & 2 are given, 4 is the result', () => {
        //Arrange
        const firstArgument = 2;
        const secondArgument = 2;

        //Act
        const receivedResult = firstArgument + secondArgument;

        //Assert
        expect(receivedResult).toBe(4);
    });
});