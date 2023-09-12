// Importing the module in Common JS Syntax
const searchingFunctions = require('./searching');

console.log(searchingFunctions); // { linearSearch: [Function: linearSearch], binarySearch: [Function: binarySearch] }

// in order to use the functions we need to access them using the dot notation
console.log(searchingFunctions.linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(searchingFunctions.binarySearch([1, 2, 3, 4, 5], 3)); // 2

const {linearSearch, binarySearch} = require('./searching'); // using object destructuring

// In ES6 Modules Syntax
// import {linearSearch, binarySearch} from './searching';

console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2