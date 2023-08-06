console.log(Number("123")); //123
console.log(Number("abcd")); // NaN
console.log(Number("0xa")); //10

//How to check whether a variable is having value NaN? 
let x = NaN; //typeOf(x) is number ❌

//https://262.ecma-international.org/10.0/#sec-abstract-equality-comparison
console.log(x == NaN); //false

console.log(isNaN(x)); //true

//https://262.ecma-international.org/10.0/#sec-tonumber
console.log(isNaN("sanket")); //op- true. isNaN converts the incoming input to a number

//https://262.ecma-international.org/10.0/#sec-number.isnan
console.log(Number.isNaN("sanket")); //false. Number.isNaN() doesn't do coercion
console.log(Number.isNaN(x));//true

//algo to check whether no is NaN
if (typeof (x) == 'number' && x !== x) {
    console.log(true);
}

console.log(x !== x); // ! == is there any problem with this expression to check nan value