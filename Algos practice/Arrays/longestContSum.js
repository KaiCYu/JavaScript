const maxContSum = array => {
  let localMax = 0 ;
  let globalMax = 0;
  
  for(let curr of array) {
    localMax = Math.max(0, curr + localMax);
    globalMax = Math.max(localMax, globalMax);
  }

  return globalMax;
}
// when dealing with the products of potentially negative numbers, you must
// store both the maxProd and minProd, in case the minProd times the currVal
// yeilds a higher value than any two positive (maxProd) numbers.
const maxContProd = array => {
  let min = 0;
  let max = 0;
  let globalMax = Number.NEGATIVE_INFINITY;

  for(let num of array) {
    let t1 = min * num;
    let t2 = max * num;

    min = Math.min(t1, t2, num);
    max = Math.max(t1, t2, num);
    globalMax = Math.max(max, globalMax);
  }
  return globalMax;
}

console.log(maxContSum([1,12,-3,4,5]))
// 10
console.log(maxContSum([1,2,4,-6,3,7]))
// 11
console.log(maxContSum([1,2,-4,-6,3,7]));
// 10
console.log(maxContSum([1,2,-4,6,-3,7]))
// 10

console.log(maxContProd([1,2,-3,4,5]))
// 20
console.log(maxContProd([1,12,-3,4,5]))
// 20
console.log(maxContProd([1,-12,-3,0,5]))
// 36