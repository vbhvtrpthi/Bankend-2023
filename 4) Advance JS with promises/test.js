function getRandomInt(max){
  return Math.floor(Math.random() * max)
}
function createPromiseWithTimeout(){
  return new Promise(function exec(resolve, reject){
    setTimeout(() => {
       let x = getRandomInt(10);
       if(x % 2 == 0){
        resolve(x);
       }else{
        reject(x);
       }
    }, 1000);
  })
}

let x = createPromiseWithTimeout();
x.then(
  function onFulfilled(val){
    console.log("I am inside onFulfillment fn");
    console.log(val);
  },
  function onReject(val){
    console.log("I am inside onreject fn");
    console.log(val);
  }
)