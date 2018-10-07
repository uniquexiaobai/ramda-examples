const {path, pathOr} = require('ramda');

const account = {user: {name: 'xian'}};
const account1 = {};

console.log(path(['user', 'name'], account));
console.log(path(['user', 'name'], account1));
console.log(pathOr('loki', ['user', 'name'], account1));
