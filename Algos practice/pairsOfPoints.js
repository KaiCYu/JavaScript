const modulus = (num, m) => {
  while (num < 0) {
    num += m;
  }
  return num % m;
}

const pairsOfPoints = (nums, k) => {
  let mods = [];

  for (var i = 0; i < k; i++) {
    mods[i] = 0;
  }

  for (var j = 0; j < nums.length; j++) {
    mods[modulus(nums[j], k)]++;
  }

  mods.sort((a, b) => {
    return a - b;
  })

  if (mods[k-1] > 0) {
    return mods[k-1]
  }
}

console.log(pairsOfPoints([-2,-3,0,1,0,8,7,1], 3))
