/*
In Binary Tree, Inorder successor of a node is the next node in Inorder traversal of the Binary Tree.
Inorder Successor is NULL for the last node in Inoorder traversal.
In Binary Search Tree, Inorder Successor of an input node can also be defined as the node with the smallest key greater than the key of input node. 
So, it is sometimes important to find next node in sorted order.
Each node has a pointer to the parent node
*/

function Tree(value) {
  this.value = value;
  this.left = null;
  this.right = null
  this.parent = null;
}

const findSuccessor = (node) => {
  if (!node) {
    throw new Error('node cannot be null');
  }

  let snode;
  if (node.right) {
    snode = node.right;
    while (snode.left) {
      snode = snode.left;
    }
    return snode.value;
  } else {
    snode = node;
    while (snode.parent && snode !== snode.parent.left) {
      snode = snode.parent;
    }
    return snode.parent ? snode.parent.value : undefined;
  }
}

let newTree = new Tree(20);
newTree.left = new Tree(8);
newTree.left.parent = newTree;
newTree.right = new Tree(22)
newTree.right.parent = newTree;
newTree.left.left = new Tree(4);
newTree.left.left.parent = newTree.left;
newTree.left.right = new Tree(12)
newTree.left.right.parent = newTree.left;
newTree.left.right.left = new Tree(10)
newTree.left.right.left.parent = newTree.left.right;
newTree.left.right.right = new Tree(14)
newTree.left.right.right.parent = newTree.left.right;

console.log(findSuccessor(newTree.left.left) === 8);
console.log(findSuccessor(newTree) === 22);