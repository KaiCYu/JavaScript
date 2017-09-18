// const Tree = require('./Trees/Tree.js');
const Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.next = null;
}

//async map
const asyncMap = (tasks, cb) => {
  let results = [];
  let counter = 0;

  tasks.forEach((task, i) => {
    task((result) => {
      results[i] = result;
      counter++;
      if (counter === tasks.length) {
        cb(results);
      }
    })
  })
}

const job1 = function(cb) {
  setTimeout(function() { cb('first'); }, 900);  
};

const job2 = function(cb) {
  setTimeout(function() { cb('second'); }, 100);
};

const job3 = function(cb) {
  setTimeout(function() { cb('third'); }, 300);
};

const jobs = [job1, job2, job3];
const callback = function(results) { console.log(results); };

asyncMap(jobs, callback);


//given a BST, add a next property to each node
//     1
//   2   3
//  4 5 6 7
// 8       9
//1.next = null
//2.next = 3
// 5.next = 6
// 8.next = 9

const addNextToBST = (root) => {
  let queue = [root, null];
  root.next = null;
  
  while (queue.length) {
    let current = queue.shift();
    if (current === null) {
      queue.push(null);
      for (var i = 0; i < queue.length - 1; i++) {
        queue[i].next = queue[i + 1];
      }
      if (queue[0] === null) {
        return;
      }
    }

    if (current !== null) {
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
  }
  return root;
}

let myTree = new Tree(1);
myTree.left = new Tree(2);
myTree.right = new Tree(3);
myTree.left.left = new Tree(4);
myTree.left.right = new Tree(5);
myTree.right.left = new Tree(6);
myTree.right.right = new Tree(7);
myTree.left.right.left = new Tree(8);
myTree.right.right.left = new Tree(9);

console.log(addNextToBST(myTree));
console.log(myTree)