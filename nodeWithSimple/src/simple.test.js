var simple = require('./simple');

describe('simple.js', () => {
    test('one plus one is two', () => {
        expect(1 + 1).toBe(2);
    });
});

describe('method()', () => {
    test('is 99.9 percent pure', () => {
        expect(simple.method()).toBe('newer way of functioning');
    });

    test('is 99.9 percent classic', () => {
        expect(simple.methodClassic()).toBe('hello world, i want some meth head');
    });
});