//implement a function to check if a binary tree is a binary search tree
const Tree = require('./Tree');

function isValidBST(tree) {
  if (!tree) {
    throw new Error('invalid tree');
  }
  return isValidBSTRecursive(tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function isValidBSTRecursive(node, min, max) {
  if (node) {
    if (node.value < min || node.value > max) {
      return false;
    }
    return isValidBSTRecursive(node.left, min, node.value) && isValidBSTRecursive(node.right, node.value, max);
  }
  return true;
}

let binaryTree = new Tree(8);
binaryTree.left = new Tree(4);
binaryTree.right = new Tree(10);
binaryTree.left.left = new Tree(2);
binaryTree.left.right = new Tree(12);
binaryTree.right.right = new Tree(20);

let BST = new Tree(8);
BST.left = new Tree(4);
BST.right = new Tree(10);
BST.left.left = new Tree(2);
BST.left.right = new Tree(6);
BST.right.right = new Tree(20);

// console.log(BST)
console.log(isValidBST(binaryTree));
console.log(isValidBST(BST));