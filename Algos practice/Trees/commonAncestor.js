const Tree = require('./Tree.js');

const commonAncestor = (root, target1, target2) => {
  let path1 = findPathToNode(root, target1);
  let path2 = findPathToNode(root, target2);
  let mostRecent = null;

  for (var i = 0; i < path1.length; i++) {
    if (path1[i] === path2[i]) {
      mostRecent = path1[i];
    }
  }
  return mostRecent;
}

const findPathToNode = (root, target, path) => {
  path = path || [];
  let temp;

  if (root.value === target) {
    return path;
  }

  if (root.left) {
    temp = findPathToNode(root.left, target, path.concat(root.value));
    if (temp) {
      return temp;
    }
  }

  if (root.right) {
    temp = findPathToNode(root.right, target, path.concat(root.value));
    if (temp) {
      return temp;
    }
  }
}

const commonAncestorRec = (root, target1, target2) => {
  if (root === null) {
    return null;
  }

  if (root === target1 || root === target2) {
    return root;
  }

  let left = commonAncestorRec(root.left, target1, target2);
  let right = commonAncestorRec(root.right, target1, target2);

  console.log('left', left, 'right', right);

  if (left && right) {
    return root;
  }
}

let newTree = new Tree(50);
newTree.left = new Tree(17)
newTree.right = new Tree(76)
newTree.left.left = new Tree(9)
newTree.left.right = new Tree(23)
newTree.right.right = new Tree(19)
newTree.right.left = new Tree(24)
newTree.left.left.left = new Tree(22)

console.log(findPathToNode(newTree, 22, []));
// console.log(commonAncestor(newTree, 24, 19))  //76
// console.log(commonAncestorRec(newTree, 24, 19));