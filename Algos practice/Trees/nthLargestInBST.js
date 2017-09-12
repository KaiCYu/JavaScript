const Tree = require('./Tree.js')

const nthLargestInBST = (root, n) => {
  let values =[];
  let returning = false;
  let result;

  const recurse = (node) => {
    if (returning) {
      return;
    }

    if (node.right) {
      recurse(node.right);
    }

    values.push(node.value);

    if (values.length - 1 === n) {
      returning = true;
      result = values[values.length - 1];
      return;
    }

    if (node.left) {
      recurse(node.left);
    }
  }

  recurse(root);
  return result;
}


const newTree = new Tree(5);
newTree.left = new Tree(3);
newTree.right = new Tree(7);
newTree.left.right = new Tree(4);

console.log(nthLargestInBST(newTree, 2))