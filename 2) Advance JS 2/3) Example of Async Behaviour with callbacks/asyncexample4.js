console.log("Hello world")

setTimeout(function exec() {
    console.log("Timer done");
    setTimeout(function exec() {
        console.log("another one");
    }, 10)
},
0)

for (let i = 0; i < 10000; i++) {
    //some task
}

console.log("end");