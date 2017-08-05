//https://en.wikipedia.org/wiki/Quickselect
//similar to quick sort, but we only recurse to the side where the target is
//average: O(n), worst case: O(n^2)
//in-place algo

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function partitionStart(arr, left, right) {  
  var pivotIdx = Math.floor(Math.random() * (right - left + 1)) + left;
  var storeIdx = left, pivotVal = arr[pivotIdx]
  for (var i = left; i <= right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, storeIdx, i)
      storeIdx++
    }
  }
  return storeIdx;
}

function quickSelectLoop(arr, k) {
  var pivotDist;   
  var left = 0, right = arr.length - 1;
  while(right !== left) {
    pivotDist = partitionStart(arr, left, right)
    if (k < pivotDist) {
      right = pivotDist - 1;
    } else {
      left = pivotDist;
    }
  }
  return arr[k]
}

console.log(quickSelectLoop([1000,999,1,2,3,100,105], 2))