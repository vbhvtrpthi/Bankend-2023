import { readFile, writeFile } from 'node:fs/promises';

//objective - reading a file 
// Create a filePath using an URL object | 1st parameter is your relative path with respect to the current file where index.html is present (`.` means current folder) and the 2nd parameter is the whole file path of the current file that u have to pass
const filePath = new URL("./index.html", import.meta.url);

let contents = await readFile(filePath, { encoding: "utf-8" }); // We can use await here without async since it is a top-level module

console.log(contents);

//objective - making a custom template engine
const data = {
    "name": "Vaibhav Tripathi",
    "company": "HV",
    "age": 24
}

// Object.entries() will return me an array and inside that array there will be internal arrays of 2 lengths in which the 0th index is going to be the key and the 1st index is going to be the value.
console.log(Object.entries(data));

for (const[key, value] of Object.entries(data)){
    contents = contents.replace(`{${key}}`, value)
}

// console.log(contents);

/* ------------------ Writing a file in JS ------------------*/

// await writeFile(filePath, contents); //writing in a same file from where it is read

/* ------------------ Writing a new file in JS ------------------*/
// await writeFile(new URL("./newindex.html", import.meta.url), contents)


// process.stdout.write("hi");
// process.stdout.write("hello");