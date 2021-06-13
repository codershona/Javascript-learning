// linked list Node class method
// Node class() method uses:
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // code here
    const newNode = {
      value: value,
      next: null
    };
    // Node class() method uses:
    // const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    // code here
    const newNode = {
      value: value,
      next: null
      // next: this.head
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
// myLinkedList.append(16);
// console.log(myLinkedList);
myLinkedList.prepend(1);



