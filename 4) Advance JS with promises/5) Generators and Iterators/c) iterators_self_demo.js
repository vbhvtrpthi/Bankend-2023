//supermarket ex -> shifted in bglr -> groceries manaully picking up, going store(imperative),
// just ordering w/o bothering about anything else (declarative)
//types of prog lang -> imperative ( c, c++, java, js) , declarative - sql

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

function fetchNextElement(array) {
    let idx = 0;

    function next() {
      if (idx == array.length) {
        return { value: undefined, done: true };
      }
      const nextElement = array[idx];
      idx++;
      return { value: nextElement, done: false };
    }
    
    return { next };
  }
  
  // somehwere we consume it
  const automaticFetcher = fetchNextElement([99, 11, 12, 13, 0, 1, 2, 3, 4]); 
  // inside automatic fetcher variable we can store next function
  console.log(automaticFetcher.next());
  console.log(automaticFetcher.next());
  console.log(automaticFetcher.next());
  console.log(automaticFetcher.next());
  console.log(automaticFetcher.next());
  
// Arrays in js have (Symbol.iterator) check in web console

// let arr = ["1","abc",2 ,3]
// iterator = arr[Symbol.iterator]();
// iterator.next()
// iterator.next()