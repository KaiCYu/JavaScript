function countHoles(num) {
  let count = 0;
  let splitNum = num.toString();

  for(var i = 0; i < splitNum.length; i++) {
      if (splitNum[i] === '0' || splitNum[i] === '4' || splitNum[i] === '6' || splitNum[i] === '9') {
          count++;
      }    
      if (splitNum[i] === '8') {
          count += 2;
      }
  }
  return count;
}
