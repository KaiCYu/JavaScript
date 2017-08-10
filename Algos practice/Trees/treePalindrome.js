const Tree = require('./Tree.js');

const treePalindrome = (node) => {
  let queue = [];
  let result = true;
  queue.push(node);
  queue.push(null);

  while (queue.length > 1) {
    let current = queue.shift();
    if (current !== null && current.left) {
      queue.push(current.left);
    }

    if (current !== null && current.right) {
      queue.push(current.right);
    }
    
    if (current === null && queue[0] !== null) {
      let numbers = [];
      queue.forEach(node => {
        numbers.push(node.value);
      })
      //check the queue for palindrome
      if (isPalindrome(numbers)) {
        queue.push(null);
      } else {
        return false;
      }
    } 
  }
  return result;
}

const isPalindrome = (queue) => {
  let length = queue.length;
  for (var i = 0; i < length; i++) {
    if (queue[i] !== queue[length - 1 - i]) {
      return false;
    }
  }
  return true;
}


let newTree = new Tree(1);
newTree.left = new Tree(2);
newTree.right = new Tree(2);
newTree.left.left = new Tree(3);
newTree.left.right = new Tree(4);
newTree.right.left = new Tree(4);
newTree.right.right = new Tree(3);

// console.log(isPalindrome([3,4,4,3]));
// console.log(isPalindrome([3,4,5,4,3]));
// console.log(isPalindrome([3,4,1,3,2,4,3]));

console.log(treePalindrome(newTree) === true);