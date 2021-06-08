// Data Structure: Array


// const strings = ['v','w', 'x', 'y', 'z'];
const strings = 
   ['a','v','w', 'aliens','x', 'y', 'z'];
  // ['v','w', 'x', 'y', 'z'];
    // 0   1   2    3    4    5

// 4*4 = 16 bytes of storage
// strings[2] // O(n)

// push
strings.push('u'); // O(1) // it will add u as an array in the last of the array

// pop
strings.pop(); // it will hide the push u array 
strings.pop(); // O(1) // it will hide the push z array or last array

// unshift
strings.unshift('a'); // O(n)  // it will add a at the beginning of the array.

// splice
strings.splice(2, 0, 'aliens'); // O(n/2)

console.log(strings);



// Static vs Dynamic Arrays


// const strings = ['v','w', 'x', 'y', 'z'];
const strings = 
  // ['a','v','w', 'aliens','x', 'y', 'z'];
  // ['v','w', 'x', 'y', 'z'];




['v','w', 'x', 'y', 'z'];
  // 0   1   2    3    4    5

// 4*4 = 16 bytes of storage
// strings[2] // O(n)

// push
strings.push('u'); // O(1) // it will add u as an array in the last of the array

// pop
strings.pop(); // it will hide the push u array 
strings.pop(); // O(1) // it will hide the push z array or last array

// unshift
strings.unshift('a'); // O(n)  // it will add a at the beginning of the array.

// splice
strings.splice(2, 0, 'aliens'); // O(n/2) // we can delete an arrays.

console.log(strings);

// C++
// int a[20];
// int b[5] {1, 2, 3, 4, 5}




// Classes In JavaScript

// talk about reference type, context and instantiation

// reference type

// [] === []

// [1] === [1]


var object1 = { value: 10 }; // false

var object2 = object1; // false

var object3 = { value: 10 }; // false

object2 === object1; // true

object1 === object3; // false

object1.value = 15; // 15

object2.value // 15

object3.value // 10

// context vs scope

// function b() {
//   let a = 4;
// }

console.log(this);

console.log(this === window); //true

this.alert("hello worlds");

window.alert()
alert()

function a() {
  console.log(this);
}

a();  // shows window objects

window.a();


const object4 = {
  a: function() {
    console.log(this);
  }
}

object4.a();


// Instantiation

class Player {
  constructor(name, type) {
    // adding this object
    console.log('player', this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`HI this is ${this.name}, Classes in ${this.type}`);
  }
}


class Wizard extends Player {
  constructor(name, type) {
    // adding this object
    super(name, type)
    console.log('wizard', this);
    // super(name, type)
  }
  play() {
    console.log(`We are here ${this.type}`);
  }
}

const wizard1 = new Wizard('Jelly', 'Hina');
const wizard2 = new Wizard('John', 'Hena');
wizard1.play();
wizard1.introduce();


// Implementing An Array :


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



// Strings and Arrays :
// Reverse A String:

// Most important Interview question:
// reverse a string


function reverse(str) {
  // check input 
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'that is not good';
  } 

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
    // str.split()
  }
  console.log(backwards);

  // return backwards.toString
  return backwards.join('');
}


function reverseTwo(str) {
  return str.split('').reverse().join('');
}


// create one line function by using es6
// const reverseThree = str => str.split('').reverse().join('');

const reverseThree = str => [...str].reverse().join('');
// reverse('I am learning Data Structures Arrays')
// reverseTwo('I am learning Data Structures Arrays')
reverseThree('I am learning Data Structures Arrays')



// Most important Interview question:
// Merge Sorted Arrays:
// mergeSortedArrrays([0,3,4,31], [4,6,30]);
// [0, 3, 4, 4, 6, 30, 31]



// creating a fucntion whhere array1 is first parameter and array2 is second parameter
function mergeSortedArrrays(array1, array2) {
   const mergedArray = [];
   let array1Item = array1[0];
   let array2Item = array2[0];
   let i = 1;
   let j = 1;

   // Check Input 
   if(array1.length === 0) {
     return array2;
   }

   if (array2.length === 0) {
     return array1;
   }

   // using while loop or for loop
   // while loop
   while (array1Item || array2Item) {
     console.log(array1Item, array2Item);
      // if (array1Item < array2Item) {
        if (!array2Item || array1Item < array2Item) {
          // if(array2Item === undefined || array1Item < array2Item){
      //  if (!undefined || array1Item < array2Item) {        mergedArray.push(array1Item)
        // array1Item = array1[1]
        array1Item = array1[i];
        i++;
      } else {
        mergedArray.push(array2Item);
        array2Item = array2[j];
        j++;
      }
   }


   return mergedArray;
}
// undefined < 6
// console.log('answer', undefined < 6);
// mergeSortedArrrays([0,3,4,31], [4,6,30]);
mergeSortedArrrays([0,3,4], [4,6,30]);


// mergeSortedArrrays([0,3,4,31], []);







// mergeSortedArrrays([0,3,4,31], [4,6,30]);









