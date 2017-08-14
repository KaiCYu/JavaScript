const memoize = (func) => {
  let cache = {};

  return function() {
   let key = JSON.stringify(arguments);
   if (cache[key]) {
     return cache[key];
   } else {
     let val = func.apply(this, arguments);
     return cache[key] = val;
   } 
  }
}

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(factorial(20));
// console.log(fib(20)); //6765

const memoFact = memoize(factorial);
console.log(memoFact(20));

// const memoFib = memoize(fib);
// console.log(memoFib(20));