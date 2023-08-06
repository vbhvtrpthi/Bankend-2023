console.log("Hello world")

//moment js sees setTimeout, it'll say runtime handle this function after these many seconds.
setTimeout(function exec() {
    console.log("Timer done")
}, 0)

console.log("End")
