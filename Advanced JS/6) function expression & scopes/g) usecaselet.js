//why let?

function fun() {
    for (var i = 0; i < 10; i++) {
        // do something
    }
    console.log(i); //i can be accesible here outside for loop too, if it's decalred as var(function scope).
}

//with let, it'll not be accessible
function fun() {
    for (let i = 0; i < 10; i++) {
        // do something
    }
    console.log(i); //i cant be accesible here, if it's decalred as let is block.
}

//-------------------------------------------------------------------------------------

function process(x, y) {
    if (x > y) {
        // var temp = x; //this temp has no use case outside if block but will still be accessible
        let temp = x;
        x = y;
        y = temp;
    }
    return y - x;
}

fun();