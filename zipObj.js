const {zipObj, compose, fromPairs, zip} = require('ramda');

const getName = () => Promise.resolve('loki');
const getHobbies = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(['music', 'swimming']), 500);
});

Promise.all([getName(), getHobbies()])
    // .then(R.compose(fromPairs, zip(['name', 'hobbies'])))
    .then(zipObj(['name', 'hobbies']))
    .then(console.log);
