const equalizeArray = (arr) => {
  let count = {};
  let toKeep = 0;
  let result = 0;

  for (var i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]]++;
    }
  }

  for(var j in count) {
    if (count[j] > toKeep) {
      toKeep = j;
    }
  }

  for(var k in count) {
    if (count[k] !== count[toKeep]) {
      delete count[k]
      result++;
    }
  }

  return result;
}

console.log(equalizeArray([3,3,2,1,3]));  //2