// implementation of our own hash tables:


class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) %
        this.data.length
        console.log(hash);
    }
    return hash;
  } // this is very fast because it is O(1)

  // creating set method 
   set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
        // this.data[address].push([key, value]);
        // console.log(this.data);
      // } else {
      //   this.data[address].push([key, value]);
      // }
         } 
        this.data[address].push([key, value]);
        return this.data;
  }  // O(1)

  // creating get method
  get(key) {
    let address = this._hash(key);
    const currentBuckets = this.data[address];
    console.log(currentBuckets);
    // if (currentBuckets.length) {
      if (currentBuckets) {
     // using for loop
     for(let i = 0; i < currentBuckets.length; i++) {
       if(currentBuckets[i] [0] === key) {
         return currentBuckets[i][1];
       }
      }
    } // O(1)
    return undefined;
  }

  // keys() methods:
   keys() {
     const keysArray = [];
     for (let i = 0; i < this.data.length; i++) {
       if (this.data[i]) {
        //  console.log(this.data[i][0][0]);
         keysArray.push(this.data[i][0][0])
       }
     }
     return keysArray;
   }
}

// for in loops methods is a slow
// for in loops();

//  const myHashTable = new HashTable(50);
 const myHashTable = new HashTable(500);
// const myHashTable = new HashTable(2);

// set methods:
// myHashTable.set('grape', 10000)
// myHashTable.set('grapess', 10000)
myHashTable.set('grapes', 10000)
// myHashTable.set('apples', 9)
myHashTable.set('apples', 55)
myHashTable.set('pears', 3)
// myHashTable.set('apple', 15)

// get methods:
// myHashTable.get('grapes')
// myHashTable.get('apples')
myHashTable.keys();

// _hash methods:
// myHashTable._hash('grapes');



