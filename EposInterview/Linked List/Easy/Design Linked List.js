// Design Linked List =====

Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3



SOLUTION:

// Singly linked list
var Node = function(val) {    
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

MyLinkedList.prototype.get = function(index) {
    if(index >= this.size || index < 0) return -1;
    let current = this.head;
    for(let i=0; i<index; i++) {
        current = current.next;
    }
    return current.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.size++;
    return this;
};

MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(!this.tail) {
        this.tail = newNode;
        this.head = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.size++;
    return this;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);
    if(index > this.size) return;
    if(index<=0) return this.addAtHead(val);
    if(index===this.size) return this.addAtTail(val);
    
    let current = this.head;
    for(let i=0; i<index-1; i++)
        current = current.next;
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
    return this;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>=this.size) return;
    if(index === 0) {
        this.head = this.head.next;
        this.size--;
        return this;
    }
    let current = this.head;
    for(let i=0; i<index-1; i++)
        current = current.next;
    current.next = current.next.next;
    if(!current.next) {
      this.tail = current;
    }
    this.size--;
    return this;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
