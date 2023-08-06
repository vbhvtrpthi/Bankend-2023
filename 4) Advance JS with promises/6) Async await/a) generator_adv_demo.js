//Can pass a value to the iter.next(x)  that is going to place the value at the same position where you last yielded yourself.
function* fetchNextElement() {
    console.log("inside generator");
    const x = 10;
    console.log(yield 11);
    // yield {name: "Sanket"};
    console.log("entering after a yield");
    const y = x + (yield 30);
    console.log("Value of y is", y);
}

console.log("start");
const iter = fetchNextElement();
console.log("called generator")
console.log("first", iter.next());
console.log("second", iter.next(55)); 
console.log("third", iter.next(17));