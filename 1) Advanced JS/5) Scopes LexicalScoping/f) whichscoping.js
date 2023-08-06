//JS by default supports Lexical scoping
var teacher = "Sanket"; //teacher -> global -> Sanket
function ask(question) {  //ask -> global
    console.log(teacher, question);  //"Sanket Why?"
}

function fun() {  //fun -> global
	var teacher = "Pulkit"; //teacher -> fun -> pulkit
	ask("why?");
}
fun(); 

//But suppose JS did Dynamic scoping
// var teacher = "Sanket";
// function ask(question) {
//     console.log(teacher, question);   //Pulkit Why?
// }

// function fun() {
// 	var teacher = "Pulkit";
// 	ask("why?");
// }
// fun();

//--------------------------------------------------------------------------------------------

// var fun = '123';
// function fun() { //In parsing phase, SM -> do your know about the fun in global scope? yes
//     // so, it'll not decalre two fun.
//     return 'fun2';
// }

// console.log(fun()); // error fun is not a function

//-----------------------------------------------------------------------------

// var fun;
// function fun() { //In Execution phase, SM -> do your know about the fun in global scope? yes
//     // so, Assigning will be done from here
//     return 'fun2';
// }

// console.log(fun()); // fun2