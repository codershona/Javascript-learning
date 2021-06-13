// insert() method:
// 1-->10-->99-->5-->16
// add a method insert() to the linked list that adds a node to the specified index.

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // printlist() function method
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  // insert() method uses
  insert(index, value){
    //Code here
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// insert() method uses
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)




