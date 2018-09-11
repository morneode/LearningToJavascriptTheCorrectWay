"use strict";

var _simple = require("./simple");

var Simple = _interopRequireWildcard(_simple);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('simple.js', () => {
    test('one plus one is two', () => {
        expect(1 + 1).toBe(2);
    });
});

describe('method()', () => {
    test('is 99.9 percent pure', () => {
        expect(Simple.method()).toBe('newer way of functioning');
    });

    test('is 99.9 percent classic', () => {
        expect((0, _simple.methodClassic)()).toBe('hello world, i want some meth head');
    });
});