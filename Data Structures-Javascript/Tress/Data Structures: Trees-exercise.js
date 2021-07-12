// Data Structures: Trees-exercise:
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
 }
  insert(value) {
    // insert method function
    //Code here
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        // if statement ...
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this; 
          }
          currentNode = currentNode.right;
        }
      }
    }     
 }

  lookup(value) {
    //Code here
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else if(currentNode.value === value) {
        return currentNode;
      }
    }
     return false;
  }
  // remove
  remove(value) {
    // remove method
    // how to implementthe remove method in here?
    // if we wnat to remove an item from a tree how we can do it.
    
  }

}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(9);
tree.lookup(20);
// tree.lookup(171);
// JSON.stringify(traverse(tree.root))

//     9
//  4     20
// 1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}




