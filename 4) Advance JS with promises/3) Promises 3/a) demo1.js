//timer app, ping pong game, phaserjs -> prateek narang resume, space shooter, tic tac toe
//promise.then just registers the handler in promise object onfullfillment/onrejected array, 
//when the promise state changes based upon resolve()/reject() function then only the handlers from these arrays (onfullfillment/onRejection) moves to microtask queue.
//Here in the below code handler A moves from onfulfillment array to microtask queue once resolve(data) is called.
 
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            resolve(data);
            console.log("Download completed");
        }, 7000);
    });
}

console.log("Start");
let promiseObj = fetchData("skfbjkdjbfv");
promiseObj.then(function A(value) {
    console.log("value is", value);
})
console.log("end");