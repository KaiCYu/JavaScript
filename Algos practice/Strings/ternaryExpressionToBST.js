const Tree = require('../Trees/Tree.js')

// const ternaryToBST = (str, i) => {
//   //base case
//   if (i >= str.length) {
//     return null;
//   }
//   console.log('i', i);
//   let root = new Tree(str[i]);
//   console.log(root);
//   i++;

//   if (i < str.length && str[i] === '?') {
//     root.left = ternaryToBST(str, i + 1);
//   } else if (i < str.length) {
//     root.right = ternaryToBST(str, i + 1);
//   }
//   return root;
// }

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