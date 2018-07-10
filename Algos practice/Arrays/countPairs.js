// Complete the countPairs function below.
function countPairs(numbers, k) {
  let count = 0;
  const sorted = numbers.sort((a, b) => {
    return a - b;
  })

  const uniqueSorted = sorted.filter((item, pos) => {
    return sorted.indexOf(item) === pos;
  })

  for (var i = 0; i < uniqueSorted.length; i++) {
    for (var j = i + 1; j < uniqueSorted.length; j++) {
      if ((uniqueSorted[i] - uniqueSorted[j] === k) || (uniqueSorted[j] - uniqueSorted[i] === k)) {
        count++;
      }
    }
  }
  return count;
}

console.log(countPairs([1,1,2,2,3,3], 1));
