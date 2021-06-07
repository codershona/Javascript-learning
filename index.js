// Implementing An Array :
// const a = [];
// creating an array using JS

// creating a class

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data [index]
  }

  // push method
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // adding pop item to remove or delete the last item of the array
  pop() {
    // here we do not need to pass any parameter inside pop
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;

  }

  // delete method
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
     return item;
  }
 
  // shiftitems will be a method of our array
  shiftItems(index) {
   for (let i = index; i < this.length - 1; i++) {
     this.data[i] = this.data[i+1];
   }
    delete this.data[this.length - 1];
    this.length--;
  }

}

const newArray = new MyArray();
newArray.push("hello");
newArray.push("yours");

// adding a new item to the array
 newArray.push("!!!!");
// newArray.pop();
// newArray.pop();
// newArray.delete(1);
newArray.delete(0);
// newArray.delete('1');
newArray.push('were');
newArray.push('awesome');
newArray.delete(1);
console.log(newArray);
// console.log(newArray.get(0));





