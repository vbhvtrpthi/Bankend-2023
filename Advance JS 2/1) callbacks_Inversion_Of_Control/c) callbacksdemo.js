//setTimeout is also a HOF, exec is a callback function that we are passing inside timeout.
setTimeout(function exec() {
    console.log("Running after sometime")
}, 4000); //After 4000 millisecond it is gonna run the exec file

nameofthefunction()