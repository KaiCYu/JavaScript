const largestProductOfTree = (numbers) => {
  //can optimize sort
  // let sortedNumbers = numbers.sort((a, b) => {
  //   return a - b;
  // });
  
  //using quicksort
  let sortedNumbers = quicksort(numbers);

  console.log(sortedNumbers);
  // compare product of smallest 2 numbers and largest to product of largest 3 numbers
  return Math.max(sortedNumbers[0] * sortedNumbers[1] * sortedNumbers[numbers.length - 1], sortedNumbers[numbers.length - 1] * sortedNumbers[numbers.length - 2] * sortedNumbers[numbers.length - 3])
}

const quicksort = (arr) => {
  let left = [];
  let right = [];
  let pivot = arr[0];

  if (!arr.length) {
    return arr;
  }

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(largestProductOfTree([5, 1, -10, 3, 20, -1]));  //300
console.log(largestProductOfTree([-5, 1, 10, 3, -20, 2]));   //1000
console.log(largestProductOfTree([1,2,3,4,5]));   //60

