const add = (x, y) => {
  const inner = (y) => {
    return x + y;
  }

  if (typeof y === 'undefined') {
    return inner;
  } else {
    return inner(y)
  }
}
// console.log(add(2, 3));
// console.log(add(2)(3));

function solve(grades){
  // Complete this function
  let result = [];
  grades.forEach((grade) => {
    if (grade <= 38) {
      result.push(grade);
    } else if (grade % 5 >= 3) {
      grade += 5 - grade % 5;
      result.push(grade);
    } else {
      result.push(grade);
    }
  })
  return result;
}

console.log(solve([73,67,38,33])); //75,67,40,33