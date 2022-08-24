class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    //hash the key as address
    const address = this._hash(key);
    // let location = this.data[address];
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    // console.log(this.data);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
          return currentBucket[i][1];
        }
      }
      return undefined;
    }
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArr.push(this.data[i][0][0]);
      }
    }
    console.log(keysArr);
  }
}

const myHashTable = new hashTable(50);

// myHashTable._hash("jokanola");
myHashTable.set("grapes", 60000);
myHashTable.set("apples", 50000);
myHashTable.set("oranges", 25000);
myHashTable.get("apples");
myHashTable.keys();
