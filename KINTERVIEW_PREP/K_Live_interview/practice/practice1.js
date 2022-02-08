// practice Array Manipulation



// Array method 1: forEach() Method

const arr = [1, 2, 6, 8, 10, 12, 14];
const arr2 = [1, 2, 6, 8, 10, 12, 14, 99];

arr.forEach(item => {
   console.log(item);
})

// Array method 2: includes() method

console.log(arr.includes(2));
console.log(arr.includes(15));


// Array method 3: filter() method
const filters = arr.filter(num => num > 3);
const filters2 = arr.filter(num => num < 3);
console.log(filters);
console.log(filters2);

// Array method 4: map() method

const mapArr = arr.map(num => num + 1);
const mapArr2 = arr.map(num => num + 2);
console.log(mapArr);
console.log(arr);

console.log(mapArr2);
console.log(arr);


// Array method 5: reduce() method 

const sumReduce = arr.reduce(((total, value) =>
  total + value
), 0);

console.log(sumReduce);

// Array method 6: some() method
const largeNum = arr.some(num => num > 4);
console.log(largeNum);


// Array method 7: every() method
const falseNum = arr.every(num => num > 4);
console.log(falseNum);

// Array method 8: sort() method
const arrSort = arr.sort();
console.log(arrSort);

let descOrder = arr.sort();
console.log(descOrder);
// array 2 sorting in descending order
let descOrder2 = arr2.sort((a, b) => a > b ? -1 : 1);
console.log(descOrder2);

// array 2 sorting in ascending order
let descOrder3 = arr2.sort((a, b) => a > b ? 1 : -1);
console.log(descOrder3);


// Array method 9: Array from() method
const name1 = 'Saloni';
const namArr = Array.from(name1);
console.log(name1);
console.log(namArr);

// Array method 10: Array of() method

const numOf = Array.of(8, 9, 10, 11, 12,13, 14);
console.log(numOf);

// Array method 11: join() method
const numsJoin = ['sa', 'lo', 'n', 'i'];
const numsJoin2 = [['sa', 'lo', 'n', 'i']];
console.log(numsJoin2.join(','));
console.log(numsJoin.join('*'));
// console.log(numsJoin.join('+'));

// Array method 12: toString() method
let fruitList1 = [['orange', 'strawberries', 'blueberries', 'apple', 'grapes']];
console.log(fruitList1.toString());