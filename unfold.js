const {unfold, curry} = require('ramda');

const throughNByOne = curry((limit, n) => n > limit ? false : [n, n + 1]);
const througnNBaseTwo = limit => n => n > limit ? false : [n, n * 2];

console.log(unfold(throughNByOne(15), 2));
console.log(unfold(througnNBaseTwo(256), 2));
