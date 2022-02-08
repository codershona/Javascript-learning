// Practice 3
const employees = [
  {name: "Bill", age: 33, gender: "M"},
  {name: "Mary", age: 43, gender: "F"},
  {name: "Jon", age: 20, gender: "M"},
  {name: "Max", age: 26, gender: "M"},
  {name: "Sophia", age: 50, gender: "F"} 
]

const values = [10, 20, 30, 40, 50, 60, 70];

// ======= for loop() ======
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// ======= forEach()  =========
values.forEach((value, index, element) => {
  console.log(value, index, element);
});

employees.forEach((value, age, name) => {
  console.log(value.age);
  console.log(value.name);
})


// =========== item and element same in forEach() method =======

// =========== map()  ===========

values.map(value => {
  return values;
})
console.log(values);

const meetingRoom = employees.map(value => {
  return value.age;
});

console.log(meetingRoom);


// ===== reduce()   =====

const sum = values.reduce((accumaltor, value) => {
  return accumaltor + value;
}, 0);

console.log(sum);

// ===== filter()   =====
const sum2 = values.filter(value => {
  return value < 20;
})
console.log(sum2);

const sum3 = values.filter(value => {
  return value > 20;
})
console.log(sum3);


// Get the sum who's name start with M and those person ages.

const sum6 = employees
.filter(value => value.name.charAt(0) === 'M') // this finds M name and age and gender
.map(value => value.age) // this finds only age
.reduce((accumaltor, value) => accumaltor + value, 0) // this runs total both M named age
console.log(sum6);




