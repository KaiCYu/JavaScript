//given 9x9 grid of numbers,
//see if it is a valid sudoku

const notValidBoard = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
];

const passesSecondNotFirst = [
  [1,1,1,1,1,1,1,1,1],
  [2,2,2,2,2,2,2,2,2],
  [3,3,3,3,3,3,3,3,3],
  [4,4,4,4,4,4,4,4,4],
  [5,5,5,5,5,5,5,5,5],
  [6,6,6,6,6,6,6,6,6],
  [7,7,7,7,7,7,7,7,7],
  [8,8,8,8,8,8,8,8,8],
  [9,9,9,9,9,9,9,9,9],
];

const validBoard = [ 
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

const validSolution = (board) => {
  //check each row to see if there is a duplicate
  for (var i = 0; i < board.length; i++) {
    let toCheck = board[i];
    let sorted = Array.from(toCheck);
    sorted = sorted.sort((a, b) => {
      return b - a;
    });
    for (var j = 0; j < sorted.length; j++) {
      if (sorted[j] === sorted[j+1]) {
        return false;
      }
    }
  }
  
  //check each column to see if there is a duplicate
  for (var k = 0; k < board.length; k++) {
    let column = []
    for (var l = 0; l < board[k].length; l++) {
      column.push(board[l][k]);
      for (var n = 0; n < column.length; n++) {
        if (column[n] === column[n+1]) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(validSolution(notValidBoard));    //false;
console.log(validSolution(validBoard));    //true;
console.log(validSolution(passesSecondNotFirst));    //false;
