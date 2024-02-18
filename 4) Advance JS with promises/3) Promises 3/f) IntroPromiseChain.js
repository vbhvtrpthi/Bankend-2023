function download(url) {
    console.log("started downloading content from", url);

    return new Promise(function exec(resolve, reject) {
        setTimeout(function p() {
            console.log("completed downloading data in 5 sec");
            const content = "ABCDEF"; 
            resolve(content);
            // reject(content);
        }, 5000);
    })
     
}

let x = download("www.xyz.com") // x is a promise given by download

// x.then gives a new promise, and for that promise  obj value will get resolved, once the upper promise object gets resolved.
//.then function also return a promise object but doesn' t have access to resolve or reject, whatever we return from "fullfillHandler" 
// is going to be the chained promise object's (newFullFillHandler) resolved value and same goes with the rejectHandler.
x.then(function fullfillHandler(value){
        console.log("Content downloaded is", value );
        return "New Promise string fulfill";
    },
    function rejectHandler(value){
        console.log("Content which is rejected from downloading is", value);
        return "New Promise String from reject"
        // throw "New Promise String from reject"
    }
).then(
    function newFullFillHandler(value){
         console.log("value from chained then promise", value);
    },
    function newRejectHandler(value){
         console.log("value from chained then promise", value);
    }
)


