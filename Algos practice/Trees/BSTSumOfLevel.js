//Return the sum of node values at each level of binary tree  
const sumLevelsInBST = (root) => {
  let queue = [root, null];
  let sum = 0;
  let result = [];
  
  while (queue.length) {
    let curr = queue.shift();

    if (curr === null) {
      result.push(sum);
      sum = 0;
      ueue.push(null);
      if (queue[0] === null) {
        return;
      }
    } else {
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
      sum += curr.val;
    }
  }
  return result;
}