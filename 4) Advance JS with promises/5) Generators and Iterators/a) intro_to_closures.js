//functions are first class citizens of JS.  
//closures -> remembers all those variables that are getting accessed inside your function, whose scope might be in the funcion or outside of the function, it remembers memory location of all those variables.

// innerProcess function will remember all those variables

function process() {
    let i = 0;
    function innerProcess() {
        i += 1; // i = 0
        return i;
    }
    return innerProcess; // we are not calling the function, we are just returning
}

let res = process();

console.log(res);

//To see the closures in console
// let obj = {fun: res}
// res

console.log("first time calling res", res());
console.log("second time calling res", res());
console.log("third time calling res", res());