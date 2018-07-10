// Complete the isPossible function below.
function isPossible(a, b, c, d) {
  let op1 = [a + b, b];
  let op2 = [a, a + b];
  const target = [c, d];

  // base case
  if (a + b > c + d) {
    return 'No';
  }

  if ((op1[0] === target[0] && op1[1] === target[1]) || (op2[0] === target[0] && op2[1] === target[1])) {
    return 'Yes';
  } else {
    return isPossible(a + b, b, c, d);
    return isPossible(a, a + b, c, d);
  }
}


console.log(isPossible(1,4,5,9)); //true
console.log(isPossible(1,2,3,6)); //false
