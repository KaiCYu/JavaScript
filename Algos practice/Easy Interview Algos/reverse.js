const reverseStr = (str) => {
  return str.split('').reverse().join('');
}

console.log(reverseStr('abcdef') === 'fedcba');