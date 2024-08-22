//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript (not do autoglobals),
// thereby implicitly opting-out of "sloppy mode" / non strict mode.

//Assigning to undeclared variables -> see in docs

//It stops creation of autoglobals

"use strict";
var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    content = "JS";
    console.log(teacher);
    console.log(content);
}
function gun() {
    var student = "Sarthak";
    console.log(student);
}
fun();
gun();
console.log(teacher);
console.log(content);
