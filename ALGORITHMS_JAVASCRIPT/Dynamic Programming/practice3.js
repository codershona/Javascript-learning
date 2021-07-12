// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233....
let calculate = 0;
function fibonacci(v) { // O(2^n)
  calculate++;
  if (v < 2) {
    return v
  }
  return fibonacci(v-1) + fibonacci(v-2);
}

function fibonacciMasters() {
  let caching = {};

  return function fibonacci2(v) { // O(n)
    calculate++;
    if (v in caching) {
      return caching[v];
    } else {
      if (v < 2) {
        return v;
      } else {
      caching[v] = fibonacci2(v-1) + fibonacci2(v-2);
      return caching[v];
      }
    }
  }
}


const fasterFibonacci = fibonacciMasters();
console.log('Slows up', fibonacci(10));
console.log('BP', fasterFibonacci(100));
console.log('BP', fasterFibonacci(10));
console.log('BP', fasterFibonacci(1));

console.log('we did that ' + calculate + ' calculate');

