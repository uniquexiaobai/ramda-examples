const {map} = require('ramda');

const nums = [1, 2, 3, 4, 5];

const double = n => n * 2;

console.log(nums);
console.log(map(double, nums));
console.log(map(double)(nums));
