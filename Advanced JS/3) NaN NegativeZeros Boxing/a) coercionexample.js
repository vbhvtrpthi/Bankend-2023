//https://262.ecma-international.org/10.0/#sec-addition-operator-plus
let obj = { x: 10, y: 20 };
let num = 10;
console.log("My object is" + obj); //My object is [object Object]
console.log(`My object is ${obj}`); //My object is [object Object]
console.log(`My object is ${num}`); //My object is 10

//----------------------------------------
console.log(1 < 2 < 3);// -> (1 < 2) = true -> true < 3 -> 1 < 3 -> true
console.log(3 > 2 > 1);// -> (3 > 2) -> true -> true > 1 -> 1 > 1 -> false