var teacher = "Sanket"; // global
function fun() { // global

    console.log(teacher); // no error will be given as var has function scope and is available throughout the function

    // console.log(content); // throws an error as let is a block scope and is only available post declaration.
    //This concept is called Temporal Dead Zone(TDZ) (Region before the declaration of block scope variable.)

    var teacher = "Pulkit"; // scope of fun
    let content = "JS"; // content will be accessible after post declaration

    if (content == "JS") {
        let hours = "120+";
        console.log(content, hours);
    }
    
    console.log(teacher, content);
}

fun();
console.log(teacher);
// console.log(content);


/**
 * 
 * {
 * 
 * }
 */