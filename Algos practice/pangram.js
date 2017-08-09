function isPangram(strings) {
  let result = '';
  strings.forEach((string) => {
    // console.log(result)
    // console.log(pangram(string))
    // let temp = pangram(string);
    // console.log(temp, 'result', result);
    // result.concat(pangram(string));
    result = result.concat(pangram(string));
  })
  // console.log(result);
  return result;
}

function pangram(string) {
  let alphabet = {
    'count' : 0,
  };

  for (var i = 0; i < string.length; i++) {
    // console.log('alphabet', alphabet, 'string', string[i]);
    if (string[i] !== ' ') {
      if (!alphabet[string[i]]) {
        alphabet[string[i]] = string[i];
        alphabet.count++;
      } 
    }
  }
  
  // console.log(alphabet);
  return alphabet.count === 26 ? 1 : 0;
}

let strArrays = [
  'we promptly judged antiquee ivory buckles for the next prize',
  'we promptly judged antiquee ivory buckles for the prize',
  'the quick brown fox jumps over the lazy dog',
  'the quick brown fox jump over the lazy dog',
]

// console.log(pangram('we promptly judged antiquee ivory buckles for the next prize'));
// console.log(pangram('the quick brown fox jumps over the lazy dog'));
// console.log(pangram('the quick brown fox jump over the lazy dog'));
console.log(isPangram(strArrays))   //1010