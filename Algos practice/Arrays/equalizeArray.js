const equalizeArray = (arr) => {
  let count = {
    size: 0
  };
  let max = 1;
  let result = 0;

  for (var i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
      count.size++;
    } else {
      count[arr[i]]++;
      if (count[arr[i] > max]) {
        max = count[arr[i]];
      }
    }
  }

  return count.size - max;
}

console.log(equalizeArray([3,3,2,1,3]));  //2