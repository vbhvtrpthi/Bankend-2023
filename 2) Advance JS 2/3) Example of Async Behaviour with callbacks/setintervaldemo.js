function timeConsumingByLoop() {
    console.log("loop starts");
    for (let i = 0; i < 1000000000; i++) {
        // some task
    }
    console.log("loop ends");
}
function timeConsumingByRuntimeFeature() {
    console.log("Starting timer");
    setTimeout(function exec() {
        console.log("Completed the timer");
        for (let i = 0; i < 1000000000; i++) {
            // some task
        }
    }, 5000); // 5 sec timer
}

console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
console.log("By");//Run in browser console

//setInterval will again and again execute the callback after 1000 millisecond
//setInterval(function(){console.log("another one")}, 1000)
//setInterval(function(){console.log("another one")}, 1000)
//it'll keep on printing another one every second

//another example
//setInterval(function(){console.log("another one")}, 1000)
//setInterval(function(){console.log("another second one")}, 500)

//if we want to stop the interval then we can use clearinterval and pass the unique id of the interval to be stopped
//x = setInterval(function(){console.log("another one")}, 1000)
//y = setInterval(function(){console.log("another second one")}, 500)
//clearInterval(x);

//typeof(x) and typeof(y) is number, as in browser environment(chrome browser) setInterval returns number.

//---------------------------------------------------------------------

//same thing can be done in node environment too
//But in node environment, setInterval returns object rather than no.

// let x = setInterval(function(){
// console.log("Hello")
// },1000)
// console.log(x);

//typeof(x) is object.

//Based on different runtime environment, a function with same name might behave differently.

//--------------------------------------------------------

let count = 0;
let y = setInterval(function(){
    count++;
    console.log(count);

    if(count > 15){
        clearInterval(y);
    }
}, 2000)

//https://www.jsv9000.app/
//http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIkhlbGxvIHdvcmxkIik7CmZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHsgLy8gaSA9IDMKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gZXhlYygpIHsKICAgICAgICBjb25zb2xlLmxvZygiVGltZXIgZG9uZSIpOwogICAgfSwgMTApOwp9CmZvcihsZXQgaSA9IDA7IGkgPCAxMDAwMDAwMDAwMDsgaSsrKSB7CiAgICAvLyBzb21lIHRhc2sgLy8gMTBzIAp9CmNvbnNvbGUubG9nKCJlbmQiKTsK!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

//use case -> after every 1 second, updating ui on dom.
