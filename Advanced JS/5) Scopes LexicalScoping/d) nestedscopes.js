//parsing phase,Execution phase
function fun() { // fun -> global scope
    var x = 10; // x -> fun scope
    function gun() { // gun -> fun scope
        var y = 20; // y -> gun scope
        console.log(x); // 10 Here in scope of gun x is not present so it will go one scope out to see x
        console.log(y); // 20
    }
    gun();
    console.log(x); // 10
    console.log(y); // error -> throws in execution phase
}

fun();

//https://mazurov.github.io/eslevels-demo/ 
//for understanding scopes