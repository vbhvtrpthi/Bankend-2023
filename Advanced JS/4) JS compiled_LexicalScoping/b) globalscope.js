//https://developer.mozilla.org/en-US/docs/Glossary/Scope
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

console.log(name);  //error if initialized using let but undefined if initialized with var
// let name = "Sanket"
var name = "Sanket";
function fun() {
    console.log(name);
}
fun();
console.log(name);