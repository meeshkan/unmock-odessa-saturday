import string_concat from '../src/andrii_p'
test('string a + b equals ab', () => {
    expect(string_concat('a', 'b')).toBe('ab');
});
