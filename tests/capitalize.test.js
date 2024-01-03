import capitalize from "../src/capitalize";


test('expects first letter to be capitalized', () => {
    expect(capitalize("meme")).toBe("Meme");
});