//https://262.ecma-international.org/10.0/#sec-abstract-equality-comparison
//https://262.ecma-international.org/10.0/#sec-strict-equality-comparison

console.log(null == undefined); //true
console.log(12 == "12"); //true

console.log(false == "0"); //true
/*
    x -> boolean -> ToNumber -> false -> 0
    x = 0, y = "0", x == y
    y -> ToNumber -> 0
    0 == 0 -> true
*/

console.log(null == false);
//In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object.
/**
 * y -> is a boolean -> ToNumber -> 0
 * null == 0
 * false
 */



//5) If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
console.log("NaN" == NaN); //false
//practical use case -> In linear search, if we don't find value we return -1 (if target doesn't exist), but -1 is a valid idx in python so ideally we should return NaN.


let obj = { x: 10, valueOf() { return 100; } }

console.log(99 == obj); //false
console.log(100 == obj); //true

//why use "==" if "==="" is present?
// -> In most languages, we don't have "===" this so code can become more readable