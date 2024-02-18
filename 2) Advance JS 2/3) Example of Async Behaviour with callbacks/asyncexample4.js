console.log("Hello world")

setTimeout(function exec() {
    console.log("Timer done");
    setTimeout(function exec() {
        console.log("another one");
    }, 1000)
},
0)

for (let i = 0; i < 10000000000; i++) {
    //some task
}

console.log("end");