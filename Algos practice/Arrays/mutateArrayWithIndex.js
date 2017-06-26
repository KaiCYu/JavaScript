const mutateArray = (array, index) => {
  let end = array.length;
  for (var i = 0; i < index.length; i++) {
    array[end + index[i]] = array[i];
  }
  array.splice(0, end);
  return array;
}


console.log(mutateArray(['a', 'b','c','d','e'], [2,0,1,4,3]));    //[b,c,a,e,d]