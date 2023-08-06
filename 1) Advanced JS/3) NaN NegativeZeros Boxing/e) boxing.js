//https://javascript.plainenglish.io/javascript-boxing-wrappers-5b5ff9e5f6ab
//nos ,string, undefined all are primtive but it's throwing error for only nos.
//RUn in web console

// 1.toString() //error
"abc".toString()
undefined.toString() //error
(1).toString() //now no error because of Boxing

//Boxing -> Primitive type gets converted to non-primitive implicitly
// (1) gets converted to Number(1) which is object
//(1).toString() and Number(1).toString()

//Auto Boxing
x = 10
x.toString();

//Manual Boxing
(10).toString();