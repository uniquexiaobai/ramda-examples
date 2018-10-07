const {curry, uncurryN} = require('ramda');

const add = (a, b) => a + b;
const curryedAdd = curry(add);

const mult = a => b => a * b;
const uncurryedMult = uncurryN(2, mult);

console.log(add(2, 3));
console.log(curryedAdd(4)(6));
console.log(uncurryedMult(5, 6));
