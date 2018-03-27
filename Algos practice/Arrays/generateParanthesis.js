
const generateBrackets = (n, results = [], choices =[]) => {
  const brackets = [ '(', ')'];
  if (n > 0) {
    brackets.forEach((bracket) => {
      generateBrackets(n - 1, results, choices.concat(bracket))
    })
  } else {
    results.push(choices)
  }
  return results;
}

// console.log(generateBrackets(6))

const validBrackets = (brackets) => {
  let stack = [];
  
  for (var i = 0; i < brackets.length; i++) {
    if (brackets[i] === '(') {
      stack.push(brackets[i])
    } else{
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length ? true : false;
}

// console.log(validBrackets([ '(', ')', '(', ')', '(', ')' ]))

const generateParans = (n, ) => {

}
