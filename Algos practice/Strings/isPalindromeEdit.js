/*
Given a string, determine if the string is a valid palindrome if you are able
to remove at most one character.
*/
// 'abbas' => abb, bba

const isPalindromeEdit = str => {
  for (let i = 0, j = str.length - 1; i < Math.floor(str.length/2); i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) {
      console.log(str.substring(i, j))
      console.log(str.substring(i + 1, j + 1))
      return isPalindrome(str.substring(i, j)) || isPalindrome(str.substring(i + 1, j + 1));
    }
  }
  return false;
}


const isPalindrome = str => {
  return str === str.split('').reverse().join('');
}

console.log(isPalindromeEdit('abbas'));