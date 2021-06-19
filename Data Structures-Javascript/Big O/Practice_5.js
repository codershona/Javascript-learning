// Simplifying BIG O

 function funChallenge(input) {
   let a = 10; // O(1)
   a = 50 + 3; // O(1)

 // it is for loop
   for (let i = 0; i < input.length; i++) { //O(n) or O(input)
     anotherFunction(); // O(n)
     let stranger = true; // O(n)
     a++; // a + 1 // O(n)
   }
 return a; // O(1)
 }
Big 0(n)
BIG O(3 + 4n)

 funChallenge();
 3 + n + n + n + n
 3 + 4n is a BIG O Notation


function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  // this is for loop which is running based on input
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

anotherFunChallenge();
Big 0(n)
// BIG O(4 + 5n)


// example 3:

const nemo = ['nemo'];
const fruits = ['strawberry','pineapple','apricot','pears','pomegranate','lychee','mango','banana','orange','apple'];

const larger = new Array(10000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === 'nemo') {
      console.log("We had found NEMOS!!!");
      break;
    }
  }
}
findNemo(fruits);
findNemo(nemo);

