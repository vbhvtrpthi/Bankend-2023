//setTimeout is usage of closure
function DO(task) {
    // local to DO is task
    setTimeout(function exec() {
      console.log(task); //here task still preserve the value because of closures
    }, 2000);
  }
  
  DO("dkfbjh"); //Here after calling DO fucntion execution has been finished
  console.log("end");

//----------------------------------------------------------------------
// Closure will keep hold of all those variables which the function is using inside it, no matter if it's declared inside that scope or outside.

// function outer(b){
//   function inner(){
//     console.log(a,b);
//   }
//   let a = 10;
//   return inner;
// }

// var close = outer("hello");
// close()

