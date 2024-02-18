//JS is by default synchronous in nature and is single threaded.
//Executes the next line only after completing the current one, regardless of how long it takes.

console.log("Hi we are starting");

for (let i = 0; i < 10000000000; i++) {
    // some task
}

console.log("Done");