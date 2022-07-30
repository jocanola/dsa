// class Person {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   introduction() {
//     console.log(`I am ${this.name}, I'm a ${this.type}`);
//   }
// }

// const newPerson = new Person("Yusuff", "Student");

// newPerson.introduction()

class MyArray {
  constructor(length, data) {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

newArray.push("Yusuff");
newArray.push("Jokanola");
newArray.push("Olatunji");
newArray.delete(2);
// newArray.pop();
console.log(newArray);
