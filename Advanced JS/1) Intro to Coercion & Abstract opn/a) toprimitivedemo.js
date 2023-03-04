//Objects in js  by default have toString() & valueOf()  method

// let obj = {};
// console.log(obj.toString()); //o/p -> By default gives [object Object]
// console.log(typeof obj.toString()); // string type

// let obj1 = {x : 10};
// console.log(obj1.valueOf()); //valueOf returns the same object by default -> { x: 10 }

// //we can override toString() method
// let obj = {
//     toString(){
//         // by default gives [object Object]
//         return "Let's Learn Javascript"
//     },

//     valueOf(){
//         return 10;
//     }
// };
// console.log(obj.toString()); // "Let's Learn Javascript"
// console.log(obj.valueOf()); //o/p 10

//-------------------------------------------------------------

// https://262.ecma-international.org/10.0/#sec-subtraction-operator-minus
// https://262.ecma-international.org/10.0/#sec-tonumber
// https://262.ecma-international.org/10.0/#sec-toprimitive
// https://262.ecma-international.org/10.0/#sec-ordinarytoprimitive

let obj = {};

console.log(10 - obj); // obj.valueOf -> {} (object) , toString -> [object Object]


let obj1 = { x: 9, y: 8 };
console.log(100 - obj1); // Nan

let obj2 = { x: 7, valueOf() { return 99 } };
console.log(100 - obj2); // 1

let obj3 = { x: 8, toString() { return "88" } };
console.log(90 - obj3); // 2

let obj4 = { x: 7, toString() { return {} } };
console.log(100 - obj4); //TypeError exception

