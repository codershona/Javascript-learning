// Practice 5


var x = [
  { name: "Jane", age: 30, gender: "F" },
  { name: "John", age: 50, gender: "M" },
  { name: "Carol", age: 32, gender: "F" },
  { name: "Kane", age: 20, gender: "F"},
  { name: "Jack", age: 20, gender: "M"},
  { name: "Jeffer", age: 27, gender: "M"},
  { name: "Mily", age: 19, gender: "F"}
];


console.log(x);

const filteredUser = x.filter(value => {
  return value.age > 20
})

console.log(filteredUser);


const findUser = x.find(value => {
  return value.name === "Mily"
})
console.log(findUser);

const findUser1 = x.findIndex(value => {
  return value.name === "Mily"
})
console.log(findUser1);

const findUser2 = x.map(value => {
  return value.name
})
console.log(findUser2);

const entriesUser = x[0];
const encodeUser = Object.entries(entriesUser);
console.log(Object.fromEntries(encodeUser));



