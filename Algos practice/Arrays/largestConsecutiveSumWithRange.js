/*
largestConsecutiveSum, but with a range.
Input [4,3,5,2,6], 2
Find the largest sum made up of two consecutive elements
*/

var largestConsecutiveSumWithinRange = (array, range) => {
  let maxResult = array.slice(0, range).reduce((a,b) => {
    return a + b;
  })

  let currentMax = maxResult;

  for (var i = range; i < array.length; i++) {
    currentMax += array[i] - array[i - range];

    maxResult = Math.max(currentMax, maxResult);
  }
  return maxResult;
}

console.log(largestConsecutiveSumWithinRange([4,3,5,2,6], 2))