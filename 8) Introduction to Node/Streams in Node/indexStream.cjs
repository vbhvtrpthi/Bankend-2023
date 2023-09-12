/*
 
You want to read a file. But u don’t want to read the whole file at one go. You can read the file in the form of a stream i.e. chunk by chunk you can start reading the file and then write it.

When u are actually reading the file using a readable stream u can actually pipe the stream of data to an output stream using a writable stream. U can actually pipe the content that means whatever flow of content is coming from the read pipeline u are just piping it out to the write pipeline.

*/

const fs = require("fs");
const readStream = fs.createReadStream(__dirname + '/run.txt')

const writestream = process.stdout;

readStream.pipe(writestream);

//-------------------------

//Objective - convert all the text present inside run.txt into upperCase (displaying it chunk by chunk)

// const fs = require("fs");
// const TransformStream = require('stream').Transform;

// const readStream = fs.createReadStream(__dirname + '/run.txt')

// const transFormedStream = new TransformStream({
//    transform(chunk, enc, cb){
//     this.push(chunk.toString().toUpperCase())
//     // setTimeout(cb, 3000); see what happens if we don't call a cb?
//    }
// })

// const writestream = process.stdout;

// readStream
// .pipe(transFormedStream)
// .pipe(writestream)

//-------------------------

//Objective - convert all the text present inside run.txt into upperCase  also write into new file (chunk by chunk writing of the file)

// const fs = require("fs");
// const TransformStream = require('stream').Transform;

// const readStream = fs.createReadStream(__dirname + '/run.txt')
// const fileWriteStream = fs.createWriteStream(__dirname + '/write.txt')

// const transFormedStream = new TransformStream({
//    transform(chunk, enc, cb){
//     this.push(chunk.toString().toUpperCase())
//     setTimeout(cb, 3000); 
//    }
// })

// readStream
// .pipe(transFormedStream)
// .pipe(fileWriteStream)
