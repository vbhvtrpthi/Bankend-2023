// Linear Search
const linearSearch = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        return i;
      }
    }
    return -1;
  };
  
// Binary Search assuming array is sorted
  const binarySearch = (arr, x) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === x) {
        return mid;
      } else if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  };
  
  // Exporting the module in Common JS Syntax
  module.exports = {
    linearSearch: linearSearch,
    binarySearch: binarySearch
  };
  
// shorthand syntax when the key value pair is same
//   module.exports = {linearSearch, binarySearch};
  
//   // named export in Common JS Syntax
//   module.exports = {linear : linearSearch, binary : binarySearch};
  
//   // In ES6 Modules Syntax
  // export default {linearSearch, binarySearch};