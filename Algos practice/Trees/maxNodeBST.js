// Get biggest tree node value in a binary search tree 
const Tree = require('./Tree'); 

const findLargestNode = (tree) => {
  let largest = Number.NEGATIVE_INFINITY;
  let node = tree;
  largest = node.value;

  if (!tree) {
    largest = 0;
  }

  while (node.right) {
    if (node.right.value > largest) {
      largest = node.right.value;
    }
    node = node.right;
  }
  return largest;
}

let newTree2 = new Tree(5);
newTree2.left = new Tree(3)
newTree2.right = new Tree(7)
newTree2.left.left = new Tree(1)
newTree2.left.right = new Tree(4)
newTree2.right.right = new Tree(8)
newTree2.right.left = new Tree(6)

console.log(findLargestNode(newTree2));