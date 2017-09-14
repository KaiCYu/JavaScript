const grid = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
]

const spiralMatrix = (matrix) => {
  let result = [];
  let leftInd = 0;
  let rightInd = matrix[0].length - 1;
  let topInd = 0;
  let bottomInd = matrix.length - 1;

  while (topInd <= bottomInd && leftInd <= rightInd) {
    //go right
    for (var i = leftInd; i <= rightInd; i++) {
      result.push(matrix[topInd][i])
    }
    topInd++;
    //go down
    for (var j = topInd; j <= bottomInd; j++) {
      result.push(matrix[j][rightInd]);
    }
    rightInd--;
    //go left
    for (var k = rightInd; k >= leftInd; k--) {
      result.push(matrix[bottomInd][k]);
    }
    bottomInd--;
    //go up
    for (var m = bottomInd; m >= topInd; m--) {
      result.push(matrix[m][leftInd]);
    }
    leftInd++;
  }
  return result;
}

console.log(spiralMatrix(grid));