const Tree = require('./Tree.js');

const pathToBSTNode = (root, target, path) => {
  path = path || [];

  if (!root) {
    return false;
  }
  path.push(root.value);

  if (root.value === target) {
    return path;
  }

  if (pathToBSTNode(root.left, target, path) || pathToBSTNode(root.right, target, path)) {
    return path;
  }

  path.pop();
  return false;
}


let binaryTree = new Tree(1);
binaryTree.left = new Tree(2);
binaryTree.right = new Tree(3);
binaryTree.left.left = new Tree(4);
binaryTree.left.right = new Tree(5);
binaryTree.right.left = new Tree(6);
binaryTree.right.right = new Tree(7);

console.log(pathToBSTNode(binaryTree, 5));