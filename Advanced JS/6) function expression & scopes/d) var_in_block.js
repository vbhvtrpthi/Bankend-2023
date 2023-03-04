function fun() {
    var i = 5;
    while (i < 10) {
        var x = i; //As var is function/ global scope so x will have fun scope
        i++;
    }
    console.log(x);
}
fun();


// let i = 1;
// console.log(y); //undefined
// while (i < 5) {
//     var y = 10;
//     i++;
// }
// console.log(y); //10

// redeclaration is not allowed with let, but it is allowed with var
// let x = 9;
// let x = 10;