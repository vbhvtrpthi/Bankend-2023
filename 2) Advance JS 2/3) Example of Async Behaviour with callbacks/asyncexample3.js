//considering console.log works synchronously in nature
console.log("Hello world")

for(let i = 0; i < 3; i++){
    //Inside this loop we are going to start 3 timers in runtime.
    setTimeout(function exec(){
        console.log("Time done")
    }, 10);
}

for(let i = 0; i < 100000000; i++){
    //some task //10s
}

console.log("end")

//Any asynchronous code can't hamper your synchronous code.

//JS doesn't know about console, as it is not a core feature of js? it comes from runtime
//https://nodejs.org/api/process.html#processstdout

//practical use case -> let's say you are preparing quiz app and for every question of quiz you want to give 10 seconds and 
//no refresh allowed, after 10 seconds you want a new page to be rendered.
