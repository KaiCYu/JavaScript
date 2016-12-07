function reduce(array, combine, start) {
  let current = start;

  for (var i = 0; i < array.length; i++) {
    current = combine( current, array[i]);
  }
  return current;
}

console.log(reduce([3,4,5,6,7], function(a, b) {
  return a+b;
},0));

console.log(5);

//testing
