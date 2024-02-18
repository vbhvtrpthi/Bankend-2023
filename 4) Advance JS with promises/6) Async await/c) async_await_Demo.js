//Anytime you hit await, it's going to throw you out of the function
//Any function you write as async it is assumed as a promise based function (which will return a promise) 
// await keyword could only be used inside async function 

//Run in console
// async function fun(){
//     return 10;
// }

// fun()

function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, 10000);
    });
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data);
        setTimeout(function wrtie() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    })
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log("upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    })
}

//async function always returns a promise and that promised will be resolved when we hit return statement(uploadResponse in this case)  
async function steps() {
    console.log("starting steps");
    const downloadedData = await download("www.xyz.com"); // as soon as download promise is resolved, 
    //step will go in microtask queue and wait just like generator function    
    console.log("data downloaded is", downloadedData);
    const fileWritten = await writeFile(downloadedData);
    console.log("file written is", fileWritten);
    const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
    console.log("Upload response is", uploadResponse);
    return uploadResponse;
    // resolve("async function resolved")
    // reject("async function rejected")
}

steps().then((value) => console.log("we have completed steps with", value));
console.log("outside");
for(let i = 0 ; i < 10000000000; i++) {

}
setTimeout(function f() {console.log("timer done")}, 4000);
console.log("for loop done");

