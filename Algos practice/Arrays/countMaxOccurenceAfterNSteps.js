const stepsArr = ['2 3', '3 7', '4 1']

function countX(steps) {
  let maxSize = 10;

  let board = initializeBoard(7 ,7);
  let count = 0;
  let maxValue = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < steps.length; i++) {
    let num1 = steps[i][0];
    let num2 = steps[i][2];
    incrementValue(num1, num2, board);
  }

  for (var j = 0; j < board.length; j++) {
    for (var k = 0; k < board[j].length; k++) {
      if (board[j][k] > maxValue) {
        maxValue = board[j][k];
      }
      if (board[j][k] === maxValue) {
        count++;
      }
    }
  }
  return count;
}

function initializeBoard(rows, cols) {
  var array = [], row = [];
  while (cols--) {
    row.push(0);
  }
  while (rows--) {
    array.push(row.slice());
  }
  return array;
}

function incrementValue(x, y, board) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      board[i][j]++;
    }
  }
  return board;
}

console.log(countX(stepsArr));