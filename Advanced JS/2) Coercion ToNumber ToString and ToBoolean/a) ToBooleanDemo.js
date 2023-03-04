//https://262.ecma-international.org/10.0/#sec-toboolean
//https://262.ecma-international.org/10.0/#sec-logical-not-operator

let x = 10;
console.log(!x);  //false

let y = undefined;
console.log(!y); //true

if (y) {
    console.log("It is truthy");
} else {
    console.log("It is falsy");
}