//Here we are passing callback function to setTimeout, what needs to happen after 3 second we need to mention immediately
// setTimeout(function exec(){
//     console.log("executed");
// }, 3000);

//But in promises, what will happen after the asynchronous code is completed, we can mention it later, 
//no need of defining it right there
//with promise object, there is a function called "then" 

//-----------------------------------------

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeOut(){
    return new Promise(function exec(resolve, reject){
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function() {
            let num = getRandomInt(10);
            if(num % 2 == 0){
                resolve(num);
            }else{
                reject(num);
            }
        }, 10000);

        console.log("Exiting the executor callback in the promise constructor");
    })
}

console.log("Starting....");
let p = createPromiseWithTimeOut();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like ... ", p);
p.then(
    function fulfillHandler(value) { 
        console.log("Inside fulfill handler with value", value);
        console.log("promise after fulfillment is", p);
    },
    function rejectionHandler(value){
        console.log("Inside rejection handler with value", value);
        console.log("promise after rejection is", p);

    }
)

//Promise object has two arrays, onfulfilled/ onrejected whatever handlers we register are stored into that array, 
// and executed only after it get's green signal from the event loop.
// .then is just the registrer which registers the fulfillmentHandler or rejectionHandler to the promise arrays onfulfilled/ onrejected. 
// these functions will be executed only when the promise state transitions from pending (fulfillmentHandler, rejectionHandler);

//-----------------------------------------------------------------------------------------

//we can register multiple fulfillmentHandler and rejectionHandler using .then in onfulfilled and onrejected array


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function createPromiseWithTimeout() {
//     return new Promise(function executor(resolve, reject) {
//         console.log("Entering the executor callback in the promise constructor");
//         setTimeout(function () {
//             let num = getRandomInt(10);
//             if(num % 2 == 0) {
//                 // if the random number is even we fullfill
//                 resolve(num);
//             } else {
//                 // if the random number is odd we reject
//                 reject(num);
//             }
//         }, 1000);
//         console.log("Exitting the executor callback in the promise constructor");
//     });
// }

// console.log("Starting....");
// const p = createPromiseWithTimeout();
// console.log("We are now waiting for the promise to complete");
// console.log("Currently my promise object is like ... ", p);
// console.log("Going to register my 1st set of handlers");
// p
// .then(
//     function fulfillHandler1(value) { 
//         console.log("Inside fulfill handler 1 with value", value); 
//         console.log("Promise after fullfillment is", p);
//     }, 
//     function rejectionHandler1(value) {  
//         console.log("Inside rejection handler 1 with value", value); 
//         console.log("Promise after rejection is", p);
//     }
// );
// console.log("Going to register my 2nd set of handlers");

// p
// .then(
//     function fulfillHandler2(value) { 
//         console.log("Inside fulfill handler 2 with value", value); 
//         console.log("Promise after fullfillment is", p);
//     }, 
//     function rejectionHandler2(value) {  
//         console.log("Inside rejection handler 2 with value", value); 
//         console.log("Promise after rejection is", p);

//     }
// );

// console.log("Ending......");



//-----------------------------------------------------------------------------------------


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// function createPromiseWithTimeout() {
//     return new Promise(function executor(resolve, reject) {
//         console.log("Entering the executor callback in the promise constructor");
//         setTimeout(function () {
//             let num = getRandomInt(10);
//             if(num % 2 == 0) {
//                 // if the random number is even we fullfill
//                 resolve(num);
//             } else {
//                 // if the random number is odd we reject
//                 reject(num);
//             }
//         }, 1000);
//         console.log("Exitting the executor callback in the promise constructor");
//     });
// }
// console.log("Starting....");
// const p = createPromiseWithTimeout();
// console.log("We are now waiting for the promise to complete");
// console.log("Currently my promise object is like ... ", p);
// console.log("Going to register my 1st set of handlers");
// p
// .then(
//     function fulfillHandler1(value) { 
//         console.log("Inside fulfill handler 1 with value", value); 
//         console.log("Promise after fullfillment is", p);
//         setTimeout(function t() {console.log("Ended 0s timer")}, 0);
//         console.log("exitting the full handler 1");
//     }, 
//     function rejectionHandler1(value) {  
//         console.log("Inside rejection handler 1 with value", value); 
//         console.log("Promise after rejection is", p);
//         setTimeout(function t() {console.log("Ended 0s timer")}, 0);
//         console.log("exitting the reject handler 1");
//     }
// );
// console.log("Going to register my 2nd set of handlers");

// p
// .then(
//     function fulfillHandler2(value) { 
//         console.log("Inside fulfill handler 2 with value", value); 
//         console.log("Promise after fullfillment is", p);
//     }, 
//     function rejectionHandler2(value) {  
//         console.log("Inside rejection handler 2 with value", value); 
//         console.log("Promise after rejection is", p);

//     }
// );

// console.log("Ending......");
// setTimeout(function () {console.log("Global timer of 0s")}, 1000);
