//the maximum differencce between elements in some array, a, is defined as the
//largest difference between any a[i] and a[j] where i < j and a[i] < a[j]

const findMaxDiff = (arr) => {
  //O(n^2) approach
  // let maxDiff = Number.NEGATIVE_INFINITY;
  // for (var i = 0; i < arr.length; i++) {
  //   for (var j = 0; j < arr.length; j++) {
  //     if (i < j && arr[i] < arr[j] && maxDiff < arr[j] - arr[i]) {
  //       maxDiff = arr[j] - arr[i];
  //     }
  //   }
  // }
  // return maxDiff;

  //O(n) time
  //O(1) space
  let maxDiff = arr[1] - arr[0];
  let minEl = arr[0];
  let isDesc = true;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] - minEl > maxDiff) {
      maxDiff = arr[i] - minEl;
    }
    if (arr[i] < minEl) {
      minEl = arr[i];
    }
    if (arr[i] > arr[0]) {
      isDesc = false;
    }
  }
  if (isDesc && maxDiff < 0) {
    return -1
  }
  return maxDiff;
}

// console.log(findMaxDiff([4,1,2,3]) === 2);
// console.log(findMaxDiff([1, 5, 2, 3, 4, 7]) === 6);
// console.log(findMaxDiff([2,3,10,6,4,8,1]) === 8);
// console.log(findMaxDiff([7,9,5,6,3,2]) === 2);
// console.log(findMaxDiff([10,8,7,6,5]) === -1);
// console.log(findMaxDiff([-1, -5, -3, -2, -4]) === 3);
// console.log(findMaxDiff([-4, -1, -2, -3]) === 3);
// console.log(findMaxDiff([-4, 1, -2, 3]) === 7);
// console.log(findMaxDiff([-10, -8, -7, -6, -5]) === 5);

// function foo1() {
//   return {
//     bar: "hello"
//   };
// }

// function foo2() {
//   return
//   {
//     bar: "hello"
//   };
// }

// console.log(foo1() === foo2());
// console.log(foo2());
function foo() {
  return 5;
}

let myVar = foo;
console.log(myVar);