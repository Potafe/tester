import reversestring from '../src/reversestring'

test('expect string to be reversed', () => {
    expect(reversestring('Fatboy')).toBe('yobtaF')
})