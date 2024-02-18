//Every piece of a code that can be executed in a future is asynchronous.
console.log("hi");
setTimeout(function () { console.log("time done"); });
console.log("by");


//Browser/node/deno is a run time environment which provides lots of feature which are not native to js, 
//in order to ensure that js can work with full potential inside a browser.
/* js doesn't know
    - about timer
    - how to manipulate DOM
these are features provided by Browser runtime
*/