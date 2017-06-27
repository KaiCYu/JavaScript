class BinaryHeap {
  constructor() {
    this.content = [];
  }

  pop() {
    let temp = this.content[0];
    let end = this.content[this.content.length - 1];
    
    this.content[0] = end;
    this.sinkDown(this.content);

    return temp;
  }

  push(value) {
    this.content.push(value);
    this.bubbleUp(this.content);
  }

  bubbleUp(pos) {
    let parentIndex = Math.floor((pos - 1) / 2);
  }

  sinkDown(pos) {

  }

  swap(a, b) {
    [a, b] = [b, a]
  }
}

let bh = new BinaryHeap();
bh.push(1)
bh.push(2)
bh.push(3)
bh.pop();