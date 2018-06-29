const garden = 
[
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8],
]

function findMaxMiddleIndex(arr) {
  if (arr.length % 2 === 0) {
    const first = Math.floor(arr.length / 2) - 1
    const second = Math.floor(arr.length / 2)
    return arr[first] > arr[second] ? first : second;
  }
  return Math.floor(arr.length / 2);
}

function findMaxMiddleValue(arr) {
  if (arr.length % 2 === 0) {
    const first = Math.floor(arr.length / 2) - 1
    const second = Math.floor(arr.length / 2)
    return arr[first] > arr[second] ? arr[first] : arr[second];
  }
  return arr[Math.floor(arr.length / 2)];
}

// find middle of the garden. need to remember the coordinates
// returns an object with value, x, and y
function findMiddle(garden) {
  const rowIndex1 = Math.floor(garden.length / 2) - 1;
  const rowIndex2 = Math.floor(garden.length / 2);
  const maxFromRow1 = {
    x: findMaxMiddleIndex(garden[rowIndex1]),
    y: rowIndex1,
    value: findMaxMiddleValue(garden[rowIndex1]),
  };
  const maxFromRow2 = {
    x: findMaxMiddleIndex(garden[rowIndex2]),
    y: rowIndex2,
    value: findMaxMiddleValue(garden[rowIndex2]),
  };
  return maxFromRow1.value > maxFromRow2.value ? maxFromRow1 : maxFromRow2;
}

//given position of on a board, find which position to move to
function findPositionToMove(garden, currentPosition) {
  const x = currentPosition[0];
  const y = currentPosition[1];

  let adjacent = [];
  //need boundaries!
  if (garden[x - 1] !== undefined) {
    adjacent.push({
      value: garden[x - 1][y],
      x: x - 1,
      y: y,
    });
  }
  if (garden[x + 1] !== undefined) {
    adjacent.push({
      value: garden[x + 1][y],
      x: x + 1,
      y: y,
    });
  }
  if (garden[y - 1] !== undefined) {
    adjacent.push({
      value: garden[x][y - 1],
      x: x,
      y: y - 1,
    });
  }
  if (garden[y + 1] !== undefined) {
    adjacent.push({
      value: garden[x][y + 1],
      x: x,
      y: y + 1,
    })
  }
  
  //find the max value in adjacent and return the object
  let maxAdjacent;
  let maxValue = Number.NEGATIVE_INFINITY;
  adjacent.forEach((pos) => {
    if (pos.value > maxValue) {
      maxValue = pos.value;
      maxAdjacent = pos;
    }
  })
  return maxAdjacent
}

function findPoints(garden, position, points) {
  //the first move
  if (!position) {
    const middle = findMiddle(garden);
    position = [middle.y, middle.x];
    points += middle.value;
    garden[middle.y][middle.x] = 0;
  }
  
  let next = findPositionToMove(garden, position)
  if (next.value > 0) {
    points += next.value;
    position = [next.x, next.y];
    //clear value from current position 
    garden[next.x][next.y] = 0;
    
    return findPoints(garden, position, points);
  }
  return points;
}

console.log(findPoints(garden, null, 0));