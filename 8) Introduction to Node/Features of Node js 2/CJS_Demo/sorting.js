// Bubble Sort
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };

// Selection Sort
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    return arr;
  };

// Insertion Sort
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  };
  
// Exporting the module in Common JS Syntax
// another way to export the module
module.exports.bubbleSort = bubbleSort;
module.exports.selectionSort = selectionSort;
module.exports.insertionSort = insertionSort;
  
// also another interesting export pattern people do is using a IIFE (Immediately Invoked Function Expression)
module.exports.quickSort  = (function () {
    const quickSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }
      let pivot = arr[arr.length - 1];
      let left = [];
      let right = [];
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      return [...quickSort(left), pivot, ...quickSort(right)];
    };
    return quickSort;
  })();

// rather a normal function as well
module.exports.mergeSort = function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};
  