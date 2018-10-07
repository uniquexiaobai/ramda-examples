const {compose, concat, join, map, toPairs} = require('ramda');

const qsObj = {
    page: '2',
    pageSize: '10',
    total: '205'
};

const createQs = compose(
    concat('?'),
    join('&'),
    map(join('=')),
    toPairs
);

console.log(createQs(qsObj));
