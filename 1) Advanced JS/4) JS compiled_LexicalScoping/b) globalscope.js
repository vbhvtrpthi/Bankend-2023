//https://developer.mozilla.org/en-US/docs/Glossary/Scope
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

//var and function keyword are hoisted in JS.
console.log(name);  //error if initialized using let but undefined if initialized with var
// let name = "Sanket"
var name = "Sanket";
function fun() {
    console.log(name);
}
fun();
console.log(name);

// Hoisting in JavaScript is a behavior where variable and function 
// declarations are moved to the top of their containing scope during the compilation phase. 
// This means that regardless of where variables and functions are declared in the code,
//  they are conceptually moved to the top of their scope.


