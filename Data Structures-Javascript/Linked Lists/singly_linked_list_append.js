// append() method
// append() method:
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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    // code here
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
// myLinkedList.append(16);
// console.log(myLinkedList);

