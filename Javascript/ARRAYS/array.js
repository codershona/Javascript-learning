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











