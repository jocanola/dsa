class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    //Assign head to tail
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  lists() {
    const array = [];
    let currentList = this.head;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    console.log(array);
  }

  insert(index, value) {
    //check if the index > than the length of the list
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    let holdingNextPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingNextPointer;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(50);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(10);
console.dir(myLinkedList, { depth: null });
myLinkedList.insert(3, 70);
myLinkedList.lists();
