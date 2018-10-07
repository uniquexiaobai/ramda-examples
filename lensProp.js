const {lensProp, over, toUpper} = require('ramda');

const person = {
    firstName: 'Fred',
    lastName: 'Flintstone'
};

const flens = lensProp('firstName');

const result = over(flens, toUpper, person);

console.log(result);
