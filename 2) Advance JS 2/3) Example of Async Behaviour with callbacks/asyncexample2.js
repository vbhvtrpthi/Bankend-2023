console.log("Hello world")

//exec will wait in the event queue till it gets signal from event loop.
//Only internal functionalities of js can block the code, runtime features can't
setTimeout(function exec() {
    console.log("Timer done")
}, 0)

for(let i = 0; i < 10000000; i++){
    //some task //10s
}

console.log("end")
