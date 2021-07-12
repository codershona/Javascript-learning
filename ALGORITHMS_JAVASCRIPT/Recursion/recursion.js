// Algorithms : Recursion
// anatomy of Recursion
let counter = 0;
function inception() {
  // conditional statement
  console.log(counter);
  // debugger
  if (counter > 3) {
   return 'finish!';
  }
   counter++;
   return inception();
  // console.log('why?');
}

// inception(inception(inception(inception('finshed'))));
inception(); // undefined

inception(); // return the finish!

// identify the base case
// identify the recursive case 
// *greater
// get closer to closer and return when it needed, usually you have 2 returns

