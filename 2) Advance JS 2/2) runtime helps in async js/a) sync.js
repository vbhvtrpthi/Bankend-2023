//JS is by default synchronous in nature and is single threaded.
//After completion of one line in respect to whatever time it takes, post that only will move to next line for execution.

console.log("Hi we are starting");

for (let i = 0; i < 10000000000; i++) {
    // some task
}

console.log("Done");