class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  contains(target) {
    if (target === this.value) {
      return true;
    }
    if (target < this.value) {
      if (this.left) {
        return this.left.contains(target);
      } 
      return false;
    }
    if (target > this.value) {
      if (this.right) {
        return this.right.contains(target);
      } 
      return false;
    }
    return false;
  }
  
  insert(val) {
    if (val < this.value) {
      !this.left ? this.left = new BST(val) : this.left.insert(val);
      // if (!this.left) {
      //   this.left = new BST(val);
      // } else {
      //   this.left.insert(val);
      // }
    } else {
      !this.right ? this.right = new BST(val) : this.right.insert(val);
    //   if (!this.right) {
    //     this.right = new BST(val);
    //   } else {
    //     this.right.insert(val);
    //   }
    }
  }

  bfs() {
    let queue = [];
    queue.push(this);

    while (queue.length) {
      let current = queue.shift();
      console.log('current: ', current);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  inOrderDFS(result=[]) {
    if (this.left) {
      this.left.inOrderDFS(result)
    }
    
    result.push(this.value);

    if (this.right) {
      this.right.inOrderDFS(result)
    }
    return result;
  }

  nthLargest(n) {
    let sorted = this.inOrderDFS();
    return sorted.slice((sorted.length - n))
  }

  // nthLargestWithoutArray(n, result = [], count = 0) {
  //   if (this.right) {
  //     this.right.nthLargestWithoutArray(n, result)
  //   }
  // }
}


let myTree = new BST(5);
myTree.insert(3);
myTree.insert(10);
myTree.insert(7)
myTree.insert(15)
myTree.insert(4)

// console.log(myTree.contains(10));
// console.log(myTree)
// myTree.bfs()
// console.log(myTree.inOrderDFS());
// console.log(myTree.nthLargest(3));
console.log(myTree.nthLargestWithoutArray(3));