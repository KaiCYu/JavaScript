const concentricRect = (a) => {
  let grid = [[1]];
  recurse(grid, 1, a);
  return grid;
}

const recurse = (grid, current, a) => {
  if (current === a) {
    return grid;
  }
  //add top row and bottom row
  let tempRow1 = [];
  let tempRow2 = [];

  for (var i = 0; i < current * 2 + 1; i++) {
    tempRow1.push(current + 1);
    tempRow2.push(current + 1);
  }
  grid.push(tempRow1);
  grid.unshift(tempRow2);
  //shift and push current into the middle rows
  for (var j = 1; j < grid.length - 1; j++) {
    grid[j].push(current + 1);
    grid[j].unshift(current + 1);
  }
  recurse(grid, current + 1, a)  
}

console.log(concentricRect(4));