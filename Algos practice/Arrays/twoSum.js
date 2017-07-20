/*
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, 
where index1 must be less than index2. 
Please note that your returned answers (both index1 and index2) are not zero-based.

Example
Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

const twoSum = (arr, target) => {
  let result = [];
  let dict = {};

  for (var i = 0; i < arr.length; i++) {
    dict[target - arr[i]] = true;
  }

  for (var i = 0; i < arr.length; i++) {
    if (dict[arr[i]]) {
      result.push(arr[i]);
    } 
  }
  return result;
}

console.log(twoSum([5,1,3,2,4,2], 4));  //[1,3]
// console.log(twoSum([2,7,11,15], 9));  //[2,7]