var digitsMap = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
};

let phoneNumberWords = (numString) => {
  let results = [];

  const helper = (digits, partial = '') => {
    if (!digits) {
      return results.push(partial);
    }

    let letters = digitsMap[digits[0]];
    for (var i = 0; i < letters.length; i++) {
      let char = letters[i];
      helper(digits.slice(1), partial + char);
    }
  }

  helper(numString);
  return results;
}
console.log(phoneNumberWords('241'))