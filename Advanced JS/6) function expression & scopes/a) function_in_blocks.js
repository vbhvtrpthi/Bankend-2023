//Here fun doesn't care about the {} block, it is acting as a global scope
{
    function fun() {
        return "123";
    }
}

console.log(fun); //[Function: fun]