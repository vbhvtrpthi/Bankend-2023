//https://262.ecma-international.org/10.0/#sec-tostring

// ToString -> "" + value
console.log("" + 0); // 0 -> "0"
console.log("" + (-0)); // -0 -> "0"

console.log("" + []); // [] -> ""
console.log("" + {}); //[object Object]

console.log("" + [1,2,3]); //1,2,3

console.log("" + [null, undefined]); // ,

console.log("" + [1,2, null, 4]); // 1,2,,4


//ToNumbers
console.log(0 - "010"); //"O inside string is treated as a normal decimal no if followed by a normal no" -> decimal no // -10
console.log(0 - "O10"); //NaN "Here it's not 0 but alphabet O" 
// console.log(0 - 010); //No starting with 0 gets converted to octal no // o/p -8
console.log(0 - "0xb");// hexadecimal number  (-11)
console.log(0 - 0xb); // hexadecimal number  (-11)

console.log([] - 1) //Empty array becomes 0, -1
console.log([""] - 1);// -1
console.log(["0"] - 1);// -1
console.log([6] - 1);// 5