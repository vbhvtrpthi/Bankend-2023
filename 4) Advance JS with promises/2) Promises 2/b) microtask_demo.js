//When a promise is resolved or rejected the handlers present inside the onfulfillment and onRejection array are not immediately executed,
//When the promise state changes and on the basis of fulfillment or rejection, respective handlers move to the microtask queue and wait for the signal from the event loop,
//event loop as always will check the call stack and global code if nothing is left then it'll start execution callbacks from microtask queue, priority will given to microtask queue over callback(macrotask) queue 

function createPromise() {
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving the promise");
        resolve("Done");
    });
}

setTimeout(function process() {
    console.log("Timer completed");
}, 0);

let p = createPromise();
p.then(function fulfillHandler1(value) {
    console.log("we fulfilled1 with a value", value);
}, function rejectHandler() {});

p.then(function fulfillHandler2(value) {
    console.log("we fulfilled2 with a value", value);
}, function rejectHandler() {});

p.then(function fulfillHandler3(value) {
    console.log("we fulfilled3 with a value", value);
}, function rejectHandler() {});

for(let i = 0; i < 10000000000; i++) {}

console.log("ending");