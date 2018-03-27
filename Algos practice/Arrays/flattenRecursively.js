const flatten = (array, count) => {
  let result = [];
  array.forEach((el) => {
    if (count > 0 && Array.isArray(el)) {
      result = result.concat(flatten(el, count-1));
    } else {
      result.push(el);
    }
  })
  return result;
}

console.log(flatten( [1,[2,3], 4, [[[[[5]]]]]], 2 ));