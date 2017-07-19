const checkPrime = (num) => {
  var divisor = 2;

  while (num > divisor) {
    if (num % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}


console.log(checkPrime(3));
console.log(checkPrime(5));
console.log(checkPrime(7));
console.log(checkPrime(8));