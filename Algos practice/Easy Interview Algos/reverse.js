const reverseStr = (str) => {
  return str.split('').reverse().join('');
}

const reverseStrRec = (str) => {
  if (str === '') {
    return '';
  }
  return reverseStrRec(str.slice(1)) + str[0];
}

console.log(reverseStr('abcdef') === 'fedcba');
console.log(reverseStr('') === '');
console.log(reverseStrRec('abcdef') === 'fedcba');
console.log(reverseStrRec('') === '');