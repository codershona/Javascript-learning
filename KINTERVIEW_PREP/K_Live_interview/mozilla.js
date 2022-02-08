Problem:


var x = [
  { name: "Jane", age: 30, gender: "W" },
  { name: "John", age: 50, gender: "M" },
  { name: "Carol", age: 32 }
];

// Task: Please list males over 40.// oneliner?


Solution:

const filterX = x.filter((item) => {
  return item.age <= 40
})
console.log(filterX);

// console.log(x);

const filter2 = x.filter((item) => {
  return item.age >= 40
})
console.log(filter2);


