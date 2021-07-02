// memorization

function addTo80(n) {
  console.log('long times!!')
  return n + 80;
}



// addTo80(5)
// addTo80(5)
// addTo80(5)

// let cache = {
//   // 5: 85
// };
function memorizationAddTo80(n) {
  // memorization 2
  let cache = {
  // 5: 85
};
return function(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('longg time!!!');
    cache[n] = 5 + 80;
    return cache[n];
    }
  }
}
const memorization2 = memorizationAddTo80();
console.log('1', memorization2(5));
console.log('2', memorization2(6));
console.log('2', memorization2(5));
console.log('2', memorization2(7));
// memorizationAddTo80(5)
// memorizationAddTo80(5)
// console.log(memorizationAddTo80(5))
// console.log(memorizationAddTo80(5))

// console.log('1', memorizationAddTo80(5))
// console.log('2', memorizationAddTo80(5))
// console.log('2', memorizationAddTo80(6))
