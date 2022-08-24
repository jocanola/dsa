class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  printList() {
    let myArray = [];

    let currentNode = this.first;
    while (currentNode) {
      myArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(myArray);
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (this.length === 0) {
      this.last = null;
    }
    this.first = this.first.next;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Sukuroh");
myQueue.enqueue("Yusuff");
myQueue.enqueue("Waliu");
myQueue.dequeue();
// console.log(myQueue);
myQueue.printList();
