//Given a list dominos (you could consider a domino as two integers: left and right), and an integer K,
//find all pairs of dominos that their left values sum to K and their right values sum to K.

// Input:

// |2:4|

// |4:1|

// |4:4|

// |3:1|

// k = 5

// Output:

// |2:4|
// |3:1|
  
// |a1:a2|
// |b1:b2|

// |c1:c2|
// |d1:d2|

const findPairsUsingHashTable = (dominoes, target) => { 
  let hash = {};
  let result = [];

  for (var i = 0; i < dominoes.length; i++ ) {
    let t = [target - dominoes[i][0], target - dominoes[i][1]];
    hash[t] = dominoes[i].toString();
  }

  for(let domino in hash) {
    let value = [target - domino[0], target - domino[2]].toString();
    if (hash[value]) {
      result.push(value);
    }
  }

  return result;
}

console.log(findPairsUsingHashTable([[2, 4], [4, 1], [4, 4], [3, 1], [1, 4]], 5));  //[[2, 4], [3, 1], [4,1], [1, 4]]
console.log(findPairsUsingHashTable([[1,1], [4, 4], [3, 3]], 5));