//https://262.ecma-international.org/10.0/#sec-strict-equality-comparison
console.log(NaN === NaN); //false
console.log(0 === -0) //true


//https://262.ecma-international.org/10.0/#sec-samevaluenonnumber
//Here Object value is memory object/memory address
let obj1 = { x: 10 };
let obj2 = { x: 10 };
let obj3 = { y: 10 };
console.log(obj1 === obj2);
console.log(obj1 === obj3);
console.log(obj1 === obj1);
console.log({ x: 10 } === { x: 10 });

//In order to compare object values
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true