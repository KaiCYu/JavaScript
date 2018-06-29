/*
Given a string with alpha-numeric characters and parentheses, return a string
with balanced parentheses by removing the fewest characters possible.
You cannot add anything to the string.
*/

let balanceParantheses = (str) => {
  let stack = [];
  let letters = str.split('');

  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === '(') {
      stack.push(i);
    } else if (letters[i] === ')') {
      if (!stack.length) {
        letters[i] = '*';
      } else {
        stack.pop();
      }
    }
  }
  for (var i = 0; i < letters.length; i++) {
    letters[stack[i]] = '*';
  }
  return letters.join('').split('*').join('');
}

console.log(balanceParantheses(')aj(12j(jas)b1('));