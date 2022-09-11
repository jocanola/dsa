class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    if (!this.root) {
      return false;
    } else {
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (value === currentNode.value) {
          console.log(currentNode);
          return currentNode;
        }
      }

      return false;
    }
  }
  remove(value) {}
}

let myBinaryTree = new BinaryTree();

myBinaryTree.insert(20);
myBinaryTree.insert(10);
myBinaryTree.insert(30);
myBinaryTree.insert(80);
myBinaryTree.insert(5);
myBinaryTree.insert(15);
myBinaryTree.lookup(10);
// console.log(myBinaryTree);
