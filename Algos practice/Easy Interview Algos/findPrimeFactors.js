const findPrimeFactors = (num) => {
  let result = [];
  let divisor = 2;

  while (num > divisor) {
    if (num % divisor === 0) {
      result.push(divisor);
    }
    divisor++;
  }

  return result;
}


console.log(findPrimeFactors(15));  //5
console.log(findPrimeFactors(21));  //7, 3