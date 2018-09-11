'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.methodClassic = methodClassic;
const value = exports.value = 'hello world';
const value2 = exports.value2 = 'hello world';

function methodClassic() {
    return `${value2}, i want some meth head`;
}

const method = exports.method = () => {
    return 'newer way of functioning';
};

console.log(value);