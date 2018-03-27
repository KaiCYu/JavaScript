const add = (a, b) => a + b;

const curry = (cb) => {
  const curried = (...args) => {
    if (args.length >= cb.length) {
      return cb.apply(this, args);
    } else {
      return (...args2) => {
        return curried(...args.concat(args2));
      }
    }
  }
  return curried;
}

let myCurry = curry(add);
console.log(myCurry(1)()(5))
