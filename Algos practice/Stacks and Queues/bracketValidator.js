/*
We can ignore all letters besides the brackets. We use a stack to keep track of all open brackets. If we reach a closing bracket,
we pop off from the stack, and obtain the matching opening bracket from a dictionary object, and checking it against the element that was 
popped off. If they do not match, then we can return.

After iterating through the string, if the stack is empty, we know all brackets have been matched, otherwise, not all brackets have matched.

Time Complexity: O(n)
Space Complexity: O(1)
*/

const bracketValidator = (string) => {
  const openBrackets = {
    '[':'[',
    '{':'{',
    '(':'(',
  }

  const closingBrackets = {
    ']': '[',
    '}': '{',
    ')': '(',
  }

  let stack = [];

  for (var i = 0; i < string.length; i++) {
    if (openBrackets[string[i]]) {
      stack.push(string[i]);
    }
    if (closingBrackets[string[i]]) {
      let bracket = stack.pop();
      if (bracket !== closingBrackets[string[i]]) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}
console.log(bracketValidator('(Hello World)') === true);
console.log(bracketValidator('Hello World') === true); 
console.log(bracketValidator('(Hello World)[') === false); 
console.log(bracketValidator('Hello {W}orld') === true);
console.log(bracketValidator('{Hello { W(orl[d]') === false);
console.log(bracketValidator('H[el{lo}(Worl)d]') === true);
console.log(bracketValidator('(H{ell[o Wo}rl]d)') === false );
console.log(bracketValidator('[{(({{[Hell]o}}W)o)r}l](d)') === true);
