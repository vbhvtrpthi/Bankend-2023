function download(url) {
    console.log("started downloading content from", url);

    return new Promise(function exec(resolve, reject) {
        setTimeout(function p() {
            console.log("completed downloading data in 5 sec");
            const content = "ABCDEF"; 
            resolve (content);
            // resolve (content); //There is no effect of calling resolve or reject again and again, it will take the first instance only.
        }, 5000);
    })
     
}
//Here, we are not giving access to our callback(fulfillHandler) to the third party function which is (download) here.
//we have the access to our callback and we are responsible for calling our cb. 
///and suppose download function never resolves or rejects then also we'll know that the promise in in pending state.

download("www.xyz.com")
.then(function fullfillHandler(value){
        console.log("Content downloaded is", value );
    }
)

