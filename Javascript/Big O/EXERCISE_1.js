// Big O calculation:

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

funChallenge(input);


// Explanation:

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
BIG O(3 + 4n)

// funChallenge();
// 3 + n + n + n + n
// 3 + 4n is a BIG O Notation