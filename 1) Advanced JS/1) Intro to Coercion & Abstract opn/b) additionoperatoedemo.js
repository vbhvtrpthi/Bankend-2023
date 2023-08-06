//https://262.ecma-international.org/10.0/#sec-addition-operator-plus
let obj = {};

console.log(obj);

console.log("18" + obj); // "18" "[object Object]" -> "18[object Object]"

console.log(18 + obj); // 18 "[object Object]" -> "18[object Object]"