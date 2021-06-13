// insert() method:
// 1-->10-->99-->5-->16
// add a method insert() to the linked list that adds a node to the specified index.
// Linked Lists Implementation
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
        currentNode = currentNode.next;     
      
    }
    return array;
  }
  // insert() method uses
  insert(index, value){
    //Check for proper parameters;
    //Code here
    // return this.printList();
        // if (index === 0) {
      //   this.prepend(value);
      //   return this.printList();
      // }
        // check params
        if (index >= this.length) {
         return this.append(value);
        }
        const newNode = {
          value: value,
          next: null
      };
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
  }
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // delete or remove() method
  remove(index) {
    // index is a parameter
    // code here
    // check params 
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
// myLinkedList.printList();
// insert() method uses
// myLinkedList.insert(200, 99);
myLinkedList.insert(2, 99);
// myLinkedList.printList();
myLinkedList.insert(20, 88);
myLinkedList.printList();
// remove() method
myLinkedList.remove(2);
myLinkedList.printList(2);

