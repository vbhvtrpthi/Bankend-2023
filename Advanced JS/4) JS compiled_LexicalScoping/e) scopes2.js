//In Parsing- JS reads the whole code and starts allocating the variables (not the values) their corresponding scopes (scope manager (SM)).
//In parsing phase we only care of formal declaration.

//After parsing phase -> execution phase will start where assigning of values will take place in already defined scope

var teacher = "Sanket"; //Hey SM, is variable teacher already declared in global scope? if not declare it.
function fun() {
    var teacher = "Pulkit"; //Hey SM, is variable teacher already present in scope of fun? NO, so define teacher variable in fun scope

    content = "JS"; //it is not a formal declaration, so in parsing phase scope of it will not be allocated.
    //In execution phase -> Hey Scope of Fun do you have variable content ? No, whent his happens in execution phase, we go one scope out of current scope, Now we'll check variabble content in global scope, there also it's not present
    //then it'll automatically become global variable during execution phase because of "autoglobals" concept.

    console.log(teacher);
    console.log(content);
}
function gun() {
    var student = "Sarthak";
    console.log(student);
}
// console.log(content); //reference error as content is not defined, Reason-> Parsing & Execution
fun();
gun();
console.log(teacher); //hey global scope do you have a varibale teacher? if yes print
console.log(content); //coz of autoglobals

// const o = { p: 1, p: 2 };
