//var is global scoped and function scoped, it doesn't understands block scoped
if (false) {
    var x = 10; //Here x is global scoped
}

console.log(x); 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
//var is function scoped -> var is accessible throughout the function, no matter where it is declared.
function fun() {
    console.log(y); // y is accessible here
    var y = 10; // not accessible outside
}
// console.log(y); //error
// fun()

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
//let is block scoped -> let is accessible only after it has been declared
function gun() {
    console.log(z); // not accessible here
    let z = 10;
}
// console.log(z);
// gun();