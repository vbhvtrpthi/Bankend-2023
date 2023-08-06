//if we have used Strict mode, then fun will be having the block scope, and will not be accessible outside
"use strict";
{
    function fun() {
        return "123";
    }
    console.log(fun); //[Function: fun]
}

console.log(fun); // ReferenceError: fun is not defined