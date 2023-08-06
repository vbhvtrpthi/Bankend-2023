let x = -0;
console.log(x === 0); //true
console.log(x === -0); //true

//How to check whether value is -0 or not because as per docs, it'll give true 
//https://262.ecma-international.org/10.0/#sec-strict-equality-comparison 

console.log(Object.is(x, -0)); // true
console.log(Object.is(x, 0)); // false

//https://262.ecma-international.org/10.0/#sec-math.sign
console.log(Math.sign(-3)); //-1
console.log(Math.sign(2)); // 1
console.log(Math.sign(-0)); //-0
console.log(Math.sign(0)); //0

/*
    Can we write a custom function that can give us sign of a number properly ? expected -> -1, 1
*/