//https://www.hackerrank.com/challenges/sock-merchant?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

//using quicksort, O(nlogn) time
function sockMerchant(n, ar) {
  // Complete this function
  let count = 0;
  let sorted = quicksort(ar);

    for (let i = 0; i < sorted.length; i++) {
    let pair = sorted[i];
    if(sorted[i] === sorted[i + 1]) {
      i++
      count++;
    }
  }
  return count;
}

const quicksort = (arr) => {
  let left = [];
  let right = [];
  let pivot = arr[0];
  
  if (arr.length === 0) {
    return arr;
  }

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

//in linear time without sorting
const sockMerchant2 = (n, colors) => {
  let count = 0;
  let pairs = {};

  for (var i = 0; i < colors.length; i++) {
    if (!pairs[colors[i]]) {
      pairs[colors[i]] = colors[i];
    } else {
      count++;
      delete pairs[colors[i]];
    }
  }
  return count;
}



console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant2(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));