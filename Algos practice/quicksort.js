//O(n logN ) time
//O(N) space

const quicksort = (arr) => {
  let left = [];
  let right = [];
  let pivot = arr[0];

  if (arr.length === 0) {
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


console.log(quicksort([10,1,4,2,6,8,1,3,7,5])); //1,1,2,3,4,5,6,7,10