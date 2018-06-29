/*
You are given an array of integers. Sort the integers of the array into three categories. The function should allow for a "rules" object to be passed in to determine the low, mid, and high boundaries for sorting the integer categories. Provide a default "rules" object in case none is provided.

You can Google this problem to read more about it.
*/

const integers = [1,200, 50, 4, 2, 60, -20, 150, -40, 40, 7];

const dutchNationalFlag = (arr, rules = {low: 0, mid: 33, high: 66}) => {
  let result = [];
  let count = {low: 0, mid: 0, high: 0};

  const getCategory = (num) => { return num > rules.high ? 'high' : num > rules.mid ? 'mid' : 'low'};

  for(let el of arr) {
    count[getCategory(el)]++;
  }

  let ind = {low: 0, mid: count.low, high: count.low + count.mid};

  for(let num of arr) {
    result[ind[getCategory(num)]++] = num
  }
  return result;
}

console.log(dutchNationalFlag(integers));