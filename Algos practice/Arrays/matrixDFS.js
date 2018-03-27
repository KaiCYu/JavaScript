/*
Given a matrix consists of 0 and 1, find the dist of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
Example 1: 
Input:

0 0 0
0 1 0
0 0 0
Output:
0 0 0
0 1 0
0 0 0
Example 2: 
Input:

0 0 0
0 1 0
1 1 1
Output:
0 0 0
0 1 0
1 2 1
*/

const grid = [
  [1,1,1],
  [1,1,1],
  [0,0,0],
]

const matrixDFS = (matrix) => {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        // checkDistance(matrix[i][j], i, j);
        let distance = recurse(matrix, i, j, 1);
        console.log('inside matrix dfs', distance);
        matrix[i][j] = distance;
        console.log('matrix', matrix)
      }
    }
  }
  return matrix;
}

const recurse = (matrix, x, y, dist) => {
  console.log('x', x, 'y', y, 'dist', dist);
  // console.log('x', x)
  // console.log('matrix', matrix);
  // console.log('dist', dist);
  // let dist = dist || 0;

  if (x < 0 || x >= matrix[0].length || y < 0 || y >= matrix.length || matrix[x][y] === undefined) {
    return;
  }

  if (matrix[x][y] === 0) {
    return dist
  }



  // console.log(  recurse(matrix, x - 1, y, ++dist)  );
  // console.log('inside recurse', recurse(matrix, x - 1, y, dist++));
  let top = recurse(matrix, x - 1, y, dist++)
  let bottom =  recurse(matrix, x + 1, y, dist++)
  // let left = recurse(matrix, x, y - 1, dist++)
  // let right = recurse(matrix, x, y + 1, dist++)

  // return Math.min(top, bottom, left, right);
  // return Math.min( recurse(matrix, x - 1, y, ++dist), recurse(matrix, x + 1, y, ++dist), recurse(matrix, x, y - 1, ++dist), recurse(matrix, x, y + 1, ++dist))
}

console.log(matrixDFS(grid))