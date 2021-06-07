
// CLASSES IN JAVASCRIPT:

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




