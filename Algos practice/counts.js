// Complete the counts function below.
function counts(nums, maxes) {
  let result = [];
  const sortedNums = nums.sort((a, b) => a - b)
  const sortedMaxes = maxes.sort((a, b) => a - b)

  for (var i = 0; i < sortedMaxes.length; i++) {
    let count = 0;
    for (var j = 0; j < sortedNums.length; j++) {
      if (sortedNums[j] <= sortedMaxes[i]) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
}

const nums = [ 1, 4, 2, 4 ] 
const maxes = [ 3, 5 ]

console.log(counts(nums, maxes))