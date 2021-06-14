// stack implementation array:
// Data Structures: Stacks Implementation-linked list
// What if we have used a race for the stack?
// How would you change the code we you wan tto implement this is an array?
// 

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    // this.top = null;
    // this.bottom = null;
    // this.length = 0;
    this.array = [];

  }
  peek() {
    // return this.top;
    return this.array[this.array.length-1];
  }
  push(value) {
    // const newNode = new Node(value);
    // if (this.length === 0) {
    //   this.top = newNode;
    //   this.bottom = newNode;
    // } else {
    //   const holdingPointer = this.top;
    //   this.top = newNode;
    //   this.top.next = holdingPointer;
    // }
    // this.length++;
    // return this;
    // using array method
    this.array.push(value);
    return this;
  }
  pop() {
    // if (!this.top) {
    //   return null;
    // }
    // if (this.top === this.bottom) {
    //   this.bottom = null;
    // }
    // const holdingPointer = this.top;
    // this.top = this.top.next;
    // this.length--;
    // return this;
    this.array.pop();
    return this; 
  }
  //isEmpty
}

const myStack = new Stack();
// myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
// myStack.pop();


//Discord
//Udemy
//google

