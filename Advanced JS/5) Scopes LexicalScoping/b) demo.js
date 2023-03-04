//console is an object, Inside that obj there is a function "log"

//when parsing is done, console is already available in global scope
//when execution phase comes up, hey global scope do you have console? yes
// hey global scope do you have log? yes

// console.log("hi");
// console.lo("hello");
// console.log("bye");

//------------------------------------------------------------------------------------------

//Why the above code prints "hi" ?

console.log("hi");
// console = {lo: function(str) {}}
// console.lo("hello");
console.log("bye");


//https://stackoverflow.com/questions/13149282/why-does-10-tostring-work-but-10-tostring-does-not#:~:text=Because%20when%20you%20want%20to,string%20(%2210%22)

//JS here considers .. as a valid syntax as 5 is primitive but console is non primitive object.
console.log(5..toString()); //.. is going to act in a same way as . , it'll do the boxing "(5).toString" .

