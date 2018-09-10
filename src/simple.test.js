import * as Simple from "./simple";
import { methHeadClassic } from "./simple";

describe('simple.js', () => {
    test('one plus one is two', () => {
        expect(1 + 1).toBe(2);
    });
});

describe('methHead()', () => {
    test('is 99.9 percent pure', () => {
        expect(Simple.methHead()).toBe('newer way of functioning');
    });

    test('is 99.9 percent classic', () => {
        expect(methHeadClassic()).toBe('hello world, i want some meth head');
    });
});