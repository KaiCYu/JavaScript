const intPalindrome = (num) => {
  let n = num;
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return n === rev;
}

console.log(intPalindrome(313))
console.log(intPalindrome(31523))