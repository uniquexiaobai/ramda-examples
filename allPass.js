const {filter, allPass, propEq, propSatisfies, lte} = require('ramda');

const cars = [
    {
        name: 'suv',
        doors: 4,
        mpg: 19
    },
    {
        name: 'sedan',
        doors: 4,
        mpg: 30
    },
    {
        name: 'hybrid',
        doors: 4,
        mpg: 37
    },
    {
        name: 'compact',
        doors: 2,
        mpg: 32
    }
];

const goodMilage = propSatisfies(lte(30), 'mpg');
const fourDoors = propEq('doors', 4);

const perfectCars = allPass([goodMilage, fourDoors]);

const result = filter(perfectCars, cars);

console.log(result);
