class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    let newNode = new Node(value);
    //checking if there is anything in the stack
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }
  pop() {
    if (this.top === this.bottom) {
      this.bottom = null;
      this.top = null;
    } else {
      let holdingPointer = this.top.next;
      this.top = holdingPointer;
    }
    this.length--;
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("amazon");
myStack.push("axiorizon");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
