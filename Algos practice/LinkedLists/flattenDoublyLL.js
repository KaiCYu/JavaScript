/*1. In Figure 1, given the pFirst and pLast of a doubly linked list where each node has a child node that point to another linked list.
Write a function that flattens the linked list breath-first so that all nodes appear as a single level doubly linked list as shown in Figure 2 below.
Figure 1
*/

// 1 -> 2 -> 3 -> 4
//     5 - 6
//          7 - 8


//LL: 1 2 3 4 5 6

//give pfirst , plast
//iterate thru each node,
  //if node has children, add node to the end
  //otherwise continue
const Node = function (value) {
  this.value = value;
  this.next = null;
  this.prev = null;
  this.children = null;
}

const flattenLL = (pfirst, plast) => {
  let current = pfirst;
  while (current) {
    if (current.children) {
      plast.next = current.children;
      current.children.prev = plast;
      current.children = null;
    }
    current = current.next;
    while (plast.next) {
      plast = plast.next;
    }
  }
  return pfirst;
}

let linkedList = new Node(1);

