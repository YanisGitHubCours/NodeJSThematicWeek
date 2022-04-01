import { Add, Substract, Multiply } from "./calc.mjs"



test('adds 1 + 2 to equal 3', () => {
    expect(Add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(Substract(3, 2)).toBe(1);
});

test('adds 1 + 2 to equal 3', () => {
    expect(Multiply(1, 2)).toBe(2);
});

