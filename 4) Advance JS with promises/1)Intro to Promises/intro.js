//// https://262.ecma-international.org/10.0/#sec-promise-objects
//Promises are native to js, if something is native to js, handling of that part is synchronous in nature, and hence creation of promise is synchronous in nature.
//Resolve and reject will only take first value as their parameter, no matter how many times you call after calling it for the first time.

//run in web console
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// function createPromiseWithLoop(){
//     return new Promise(function executor(resolve, reject){
//         for(let i = 0; i < 10000000; i++){
//             //some synchronous task
//         }
//         let num = getRandomInt(10);
//         if(num % 2 == 0){
//             resolve(num);
//         }else{ 
//             reject(num);
//         }
//     })
// }

// let x = createPromiseWithLoop();
// console.log(x);


//-----------------------------------------------------------------------------------------------

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeOut(){
  return new Promise(function executor(resolve, reject){ 
    // Asynchronous function
      setTimeout(function(){
        let x = getRandomInt(10);
          if(x % 2 == 0){
              resolve(x);
          }else{
              reject(x);
          }
      },10000)

  })
}

let y = createPromiseWithTimeOut(); //y is a placeholder for promise, actual value will come after 10 seconds
console.log(y);
