let set1 = ['hhpddlnnsjfoyxpci']  //10
let set2 = ['ioigvjqzfbpllssuj']
// let set1 = ['hhpdd']     //4
// let set2 = ['ioigd']

function getMinimumDifference(a, b) {
  let result = [];
  
  for (var i = 0; i < a.length; i++) {
    result.push(compare(a[i], b[i]));
  }
  return result;
}

function compare(str1, str2) {
  // let diff = 0;
  let dict = {};
  let sumLetters = 0;

  if (str1.length !== str2.length) {
    return -1;
  }

  for (var i = 0; i < str1.length; i++) {
    if (!dict[str1[i]]) {
      dict[str1[i]] = 1;
    } else {
      dict[str1[i]]++;
    }
  }

  for (var j = 0; j < str2.length; j++) {
    if (dict[str2[j]]) {
      dict[str2[j]]--;
      // diff++;
    } 
  }

  for(let letter in dict) {
    sumLetters += dict[letter];
  }
  return sumLetters;
}

console.log(getMinimumDifference(set1, set2));