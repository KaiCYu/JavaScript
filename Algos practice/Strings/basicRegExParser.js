/*
Implement a regular expression function isMatch that supports the '.' and '*' symbols. 
The function receives two strings - text and pattern - and should return true if the text 
matches the pattern as a regular expression. For simplicity, assume that the actual symbols 
'.' and '*' do not appear in the text string and are used as special symbols only in the pattern string.

In case you aren’t familiar with regular expressions, the function determines if the 
text and pattern are equal, where the '.' is treated as a single a character
wildcard (see third example), and '*' is matched for a zero or more sequence of the
previous letter (see fourth and fifth examples). For more information on regular expression matching, 
see the Regular Expression Wikipedia page.

Explain your algorithm, and analyze its time and space complexities.

Examples:

input:  text = "aa", pattern = "a"
output: false

input:  text = "aa", pattern = "aa"
output: true

input:  text = "abc", pattern = "a.c"
output: true

input:  text = "abbb", pattern = "ab*"
output: true

input:  text = "acd", pattern = "ab*c."
output: true
Constraints:

[time limit] 5000ms
[input] string text
[input] string pattern
[output] boolean
*/

const isMatch = (text, pattern) => {
  return helper(text, pattern, 0, 0);
}

const helper = (text, pattern, textIndex, patIndex) => {
  if (textIndex >= text.length) {
    if (patIndex >= pattern.length) {
      return true;
    } else {
      if (patIndex + 1 < pattern.length && (pattern[patIndex + 1] === '*')) {
        return helper(text, pattern, textIndex, patIndex + 2);
      } else {
        false;
      }
    }
  } else if (patIndex >= pattern.length && (textIndex < text.length)) {
    return false;
  } else if (patIndex + 1 < pattern.length && pattern[patIndex + 1] === '*') {
    if (pattern[patIndex] === '.' || (text[textIndex] === pattern[patIndex])) {
      return (helper(text, pattern, textIndex, patIndex + 2)) || 
              helper(text, pattern, textIndex + 1, patIndex)
    } else {
      return helper(text, pattern, textIndex, patIndex + 2);
    }
  } else if (pattern[patIndex] === '.' || (pattern[patIndex] === text[textIndex])) {
    return helper(text, pattern, textIndex + 1, patIndex + 1)
  } else {
    return false
  }
}

console.log(isMatch('aa', 'a'));  //false
console.log(isMatch('aa', 'aa'));  //true
console.log(isMatch('abc', 'a.c'));   //true
console.log(isMatch('abbb', 'ab*'));   //true
console.log(isMatch('acd', 'ab*c.'));   //true

/*
time complexity: exponential, based length of the pattern
same for space complexity
*/
