const Tree = require('../Trees/Tree.js')

const ternaryToBST = (str) => {
  if (str.length === 0) {
    return null;
  }

  let root = new Tree(str[0]);
  let stack = [];
  stack.push(root);

  for (var i = 1; i < str.length; i++) {
    var node;
    if (str[i] === '?') {
      node = stack[stack.length - 1];
      node.left = new Tree(str[i + 1]);
      stack.push(node.left);
    } else if (str[i] === ':') {
      stack.pop();
      node = stack.pop();
      node.right = new Tree(str[i + 1]);
      stack.push(node.right);
    }
  }
  return root;
}

console.log(ternaryToBST('a?b:c', 0));
console.log(ternaryToBST('a?b?c:d:e', 0));