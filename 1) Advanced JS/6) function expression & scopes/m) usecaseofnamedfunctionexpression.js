//why named function expression should be used over anonymous function expressions?
function fun(fn) {
    console.log("Welcome to fun");
    fn();
}

//--> problem with code readability -> usecase of what this function is doing should be identified directly with the 
//name not after reading the code.

//Passing a function into function.
fun(function () {
    console.log("Wow so much fun");

    console.trace(); // At any point of time, if we have to see how the call stack is looking like.
});

//Better way -> readablity of code increases.
fun(function askingAboutFun() {
    console.log("Wow so much fun");
    console.trace();
});


// --> for recursive cases named function expression are also helpful
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee

//--> For tracing the function while debugging it, if we use anonymous function expression it'll not give us the logs.