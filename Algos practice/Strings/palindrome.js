const palindrome = (str) => {
  const recurse = (prev, next) => {
    //base case
    if (prev < 0 || next > str.length) {
      return true;
    }
    //recurse outwards
    return str[prev] === str[next] ? recurse(prev - 1, next + 1) : false;
  }
  let middle = Math.floor(str.length / 2);
  return middle % 2 === 0 ? recurse(middle - 1, middle + 1) : recurse(middle - 1, middle);
}

console.log(palindrome('abc') === false)
console.log(palindrome('kayak') === true)
console.log(palindrome('kayyak') === true)
console.log(palindrome('kaybaak') === false)