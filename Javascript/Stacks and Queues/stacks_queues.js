// stack and queues : how javascipt works?
// const a = 1;
// const b = 10;
// const c = 100; // memory leak

// call stack
// console.log('1');
// console.log('2');
// console.log('3');

// const one = () => {
//   const two = () => {
//     console.log('4');
//   }
//   two();
// }

// console.log('4');
// two();
// one();
// call stack
// recursion
// function foo() {
//   foo()
// }
// foo();

// asynchronuous
console.log('1'); 
setTimeout(() => {
  console.log('2');
  // }, 2000);
}, 0);
console.log('3'); 
console.log('2'); 
// callback();

// setTimeout(() => {
//   console.log('2');
// }, 2000);

// call stack
// setTimeout(), 2000
// web api's
// callback();
// callback queue
// event loop
// event listeners 
element.addEventListener('click', () => {
  console.log('click');
});



