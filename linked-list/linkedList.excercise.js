class singleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const arrayList = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arrayList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arrayList);
    return arrayList;
  }
  append(value) {
    let newNode = new singleNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    let newNode = new singleNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index >= this.length - 1) return this.append(value);
    if (index <= 0) return this.prepend(value);
    let newNode = new singleNode(value);
    let leader = this.transverseToIndex(index - 1);
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
  }

  remove(index) {
    //check if index is zero or less
    if (index <= 0) {
      let holdPointer = this.head.next;
      this.head = null;
      this.head = holdPointer;
    }
    // if (index >= this.length){
    //   // removing the last element of the list
    // }
    if (index >= 1) {
      let leader = this.transverseToIndex(index - 1);
      let holdingPointer = leader.next;
      leader.next = holdingPointer.next;
    }
    this.length--;
  }

  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
  }

  transverseToIndex(index) {
    //check if index is less than or equal zero
    let currentNode = this.head;
    let count = 0;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }
}

const myLinkedList = new LinkedList(3);
myLinkedList.append(5);
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.prepend(20);
myLinkedList.prepend(25);
myLinkedList.insert(10, 35);
myLinkedList.printList();
myLinkedList.remove(1);
myLinkedList.reverse();
myLinkedList.printList();
