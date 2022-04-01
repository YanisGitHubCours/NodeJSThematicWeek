import { Add, Substract, Multiply } from "./calc.mjs"
import { getAll } from "../server/products.mjs"
import produit from "../server/products.json"



test('adds 1 + 2 to equal 3', () => {
    expect(Add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(Substract(3, 2)).toBe(1);
});

test('adds 1 + 2 to equal 3', () => {
    expect(Multiply(1, 2)).toBe(2);
});

test('getAll: ', () => {
    expect(getAll()).toMatch(produit);
});


