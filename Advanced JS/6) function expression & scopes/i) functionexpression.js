//when the first valid expression of the line where we are defining the function is the keyword function, then it's the function declaration
function fun() { // function declaration
    // some impl
}

//when the first valid expression of the line where we are defining the function is not the keyword function, then it's the function expression
//All functions below is a function expression.

let f = function gun() { // named function expression
    // some impl
}

let a = function () { // anonymous function expression
    // okk some more impl
}


//these are not iife as we are not calling it, they are just function expression
(function x() {
        // can you stop it ?
}) // function expression

(function () {
        // i am done
})


//Fat arrow function
let y = () => {

}