//problem with callbacks -> inversion of control -> As download function is written by somone else so what if it calls our callback twice or maybe they never call our callback.
// control of our cb fn we are giving to another function, and other fn is deciding when to call our cb, where to call our cb,  whether to call our cb or not and how many times our cb should called.
 
function download(url, cb){
    console.log("Started downloading from the url", url);
    setTimeout(function exec() {
        console.log("completed downloading after 5 sec ");
        const content = "ABCDEF"; 
        cb(content);
        // cb(content);
    }, 5000);
}

download("www.xyz.com", function processDownload(data){
    console.log("downloaded data is", data);
})  

//But this is not the case with promises