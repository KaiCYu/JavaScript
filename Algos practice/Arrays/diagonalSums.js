let a = [
  [11,2,4],
  [4,5,6],
  [10,8,-12],
]


const diagnonalSum = (matrix) => {
  let primary = 0;
  let secondary = 0;

  for (let x = 0, y = 0; x < matrix.length; x++, y++) {
    primary += matrix[x][y];
  }

  for (let x = matrix.length - 1, y = 0; x >= 0; x--, y++) {
    secondary += matrix[x][y];
  }
  return Math.abs(primary - secondary);
}

console.log(diagnonalSum(a))