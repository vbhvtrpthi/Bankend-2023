//What is the usecase of var?
function fun(x) {
    let i; // var i
    if (x % 2 == 0) {
        i = 0;
    } else {
        i = 1;
    }
}

//Better way of initialization as in above code we're declaring a variable and it's getting value undefined, so why do a extra step?
// In try catch block, we can initialize something inside that block, if we want to use it outside too.
function gun(x) {
    if (x % 2 == 0) {
        var i = 0;
    } else {
        var i = 1;
    }
    console.log(i);
}

gun(10);