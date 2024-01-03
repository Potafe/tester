import ceasercipher from '../src/caesarcipher'


test ('expect a to be r', () => {
    expect(ceasercipher("a", 9)).toBe("j");
});

test('expect encrypted code', () => 
{
    expect(ceasercipher('CHATTYBRAT', 9)).toBe('lqjcchkajc')
});