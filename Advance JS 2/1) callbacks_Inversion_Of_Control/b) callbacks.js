/**
 * fun -> HOF ? -> it takes fn (which is a function) as argument
 * 
 * x -> number
 * fn -> function
 */

//HOF consumes some function as an argument and the function that you pass as an argument while calling the HOF is known as callback function.

function fun(x, fn) {
    for (let i = 0; i < x; i++) {
        console.log(i);
    }

    fn();
}

fun(10, function exec() { // exec is a callback function here
    console.log("I am executed also");
});