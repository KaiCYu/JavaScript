const Tree = require('./Tree.js');

const findMaxDepth = (node) => {
  let depth = 0;
  let queue = [];

  queue.push(node);
  queue.push(null);

  while (queue.length > 0) {
    let current = queue.shift();

    if (current === null) {
      depth++;
      queue.push(null);
      if (queue[0] === null) {
        break;
      } else {
        continue;
      }
    }

    if (current.left) {
      queue.push(current.left)
    }

    if (current.right) {
      queue.push(current.right)
    }
  }
  return depth;
}

let newTree = new Tree(50);
newTree.left = new Tree(17)
newTree.right = new Tree(76)
newTree.left.left = new Tree(9)
newTree.left.right = new Tree(23)
newTree.right.right = new Tree(9)
newTree.right.left = new Tree(23)
newTree.left.left.left = new Tree(23)

console.log(findMaxDepth(newTree));