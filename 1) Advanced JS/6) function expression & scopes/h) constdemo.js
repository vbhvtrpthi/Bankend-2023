//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

//The const declaration creates block-scoped constants, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.

// const x = 10;
// x = 9; //error

// const obj = {x: 10};
// obj.y = 9; //updation is possible in object

//obj = {} -> it'll throw an error as we are reassigning the object

// const y; //we can't have uninitialized constant.