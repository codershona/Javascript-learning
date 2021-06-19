// Stack Implementation 
// Data Structures: Stacks Implementation-linked list
// creating our own Stacks
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // peek method
  peek() {
    return this.top;
  }
  // push method
  push(value) {
   const newNode = new Node(value);
   if (this.length === 0) {
     this.top = newNode;
     this.bottom = newNode;
   } else {
     const holdingPointer = this.top;
     this.top = newNode;
     this.top.next = holdingPointer;
   }
   this.length++;
   return this;
  }
  // pop method
  pop() {
   if (!this.top) {
     return null;
   }
   if (this.top === this.bottom) {
     this.bottom = null;
   }
   // const holdingPointer = this.top;
   this.top = this.top.next;
   this.length--;
   return this
   // return holdingPointer;
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
myStack.pop();
//Discord
//Udemy
//google



