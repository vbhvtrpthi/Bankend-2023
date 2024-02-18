function x() {
    console.log("Wow");
}

// IIFE -> Immediately Invoked function expression 
//The moment we define it, then only we call it.

//use case -> In order to avoid name collision.
//if someone wants to use the same name, as the codebase is very large and they might not know about the declaration of it 
//then can use iife, otherwise using same name function can lead to overriding.


(function x(y) {
    console.log("hi", y);
})("Sanket");
//

x();

//---------------------------------------------------------------------------------------------------

function f() {
    return 1;

}

function g() {
    return 2;
}
var i = 10;

// if(i%2 == 0) {
//     var res = f();
// } else {
//     var res = g();
// }

//Another way to handle the above case -> using iife.
var res = (function evaluate(i) {
    if(i%2 == 0) return f();
    else return g();
})(i);
console.log(res);