const {compose, uniq, chain, pluck, prop} = require('ramda');

const product = {
    name: "Sample Data",
    sizes: [
        {
            name: "L",
            colors: [
                {name: "Red"},
                {name: "Blue"}
            ]
        },
        {
            name: "M",
            colors: [
                {name: "Green"},
                {name: "Yellow"}
            ]
        },
        {
            name: "S",
            colors: [
                {name: "Orange"},
                {name: "Purple"},
                {name: "Blue"}
            ]
        }
    ]
};

const getSizes = prop('sizes');
const getColors = chain(prop('colors'));
const getColorNames = pluck('name');

const getUniqueColors = compose(
    uniq,
    getColorNames,
    getColors,
    getSizes
);

console.log(getUniqueColors(product));
