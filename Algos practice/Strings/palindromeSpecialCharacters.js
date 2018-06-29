const letters = {
  'a': true,
  'b': true,
  'c': true,
  'd': true,
  'e': true,
  'f': true,
  'g': true,
}

const palindrome = string => {
  if (!string) {
    return false;
  }
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (!string.charAt(i) in letters) {
      i++;
      continue;
    }
    if (!string.charAt(j) in letters) {
      j--;
      continue;
    }
    if (string.charAt(i) !== string.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;

  // return str === str.split('').reverse().join('');
}

console.log(palindrome('a!bcba'))
console.log(palindrome('abccba'))
console.log(palindrome('abcda'))