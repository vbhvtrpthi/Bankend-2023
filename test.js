function getRandomInt(val) {
  return Math.floor(Math.random() * val);
}
function promiseDemo() {
  return new Promise(function exec(res, rej) {
    console.log("Entering the Promise");
    setTimeout(function exec() {
      let x = getRandomInt(10);
      if (x % 2 == 0) {
        res(x);
      } else {
        rej(x);
      }
    }, 1000);
    console.log("Exitting the promise");
  });
}
console.log("Main thread starts");
let obj = promiseDemo();
obj.then(
  function onFulfilled(val) {
    console.log(`Promise is resolved with tha value ${val}`);
  },
  function onRejection(val) {
    console.log(`Promise is rejected with tha value ${val}`);
  }
);
console.log("Main thread Ends");
