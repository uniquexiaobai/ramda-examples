const {pipe, head, sort, descend, prop} = require('ramda');

const teams = [
    {name: 'Lions', score: 5},
    {name: 'Tigers', score: 4},
    {name: 'Bears', score: 6},
    {name: 'Monkeys', score: 2},
];

const sortByScoreDesc = sort(descend(prop('score')));
const getName = prop('name');

const getTopName = pipe(
    sortByScoreDesc,
    head,
    getName
);

console.log(getTopName(teams));
