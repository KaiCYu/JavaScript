/*

Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example:
(1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
(2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?

*/

const wiggleSort = (nums) => {
  //find median
  //can use quickselect
  let sorted = nums.sort();
  let median = sorted[Math.floor(sorted.length / 2)];

  //separate into 3 partitions
  let first = 0, mid = 0, last = nums.length - 1;
  let length = nums.length;

  const check = (index) => {
    return (2 * index + 1) % (length | 1);
  }

  while (mid <= last) {
    if (nums[check(mid)] > median) {
      [nums[check(mid)], nums[check(first)]] = [nums[check(first)], nums[check(mid)]]
      ++first;
      ++mid;
    } else if (nums[check(mid)] < median) {
      [nums[check(mid)], nums[check(last)]] = [nums[check(last)], nums[check(mid)]]
      --last;
    } else {
      ++mid;
    }
  }
  return nums;
}

console.log(wiggleSort([1,5,1,1,6,4])) //[1,4,1,5,1,6]
console.log(wiggleSort([1,1,1,1,2,2,2])) //[1,2,1,2,1,2,1]
console.log(wiggleSort([1,2,2,1,2,1,1,1,1,2,2,2])) 