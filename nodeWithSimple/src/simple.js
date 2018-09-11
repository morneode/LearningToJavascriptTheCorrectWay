const value = 'hello world';
const value2 = (
    'hello world'
);

function methodClassic() {
    return `${value2}, i want some meth head`;
}

const method = () => {
    return 'newer way of functioning';
}

module.exports.value = value
module.exports.value2 = value2
module.exports.methodClassic = methodClassic
module.exports.method = method

console.log(value);