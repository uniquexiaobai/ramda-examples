const {partition, propEq} = require('ramda');

const pets = [
    {name: 'Spike', type: 'dog'},
    {name: 'Mittens', type: 'cat'},
    {name: 'Rover', type: 'dog'},
    {name: 'Fluffy', type: 'cat'},
    {name: 'Fido', type: 'dog'}
];

const dogCheck = propEq('type', 'dog');

const result = partition(dogCheck, pets);

console.log(result);
