/*** 
0 - Mike
1 - Jon
2 - Nila
3 - Bina
4 - Mina
5 - Jenny
**/
const person = ["Mike", "Jon", "Nila", "Bina", "Mina", "Jenny"]
console.log(person);
// ===== splice() ===========
person.splice(0, 1, "Bipasha");
console.log(person);

person.splice(1, 2, "Bipul");
console.log(person);

person.splice(1, 1, "Nipun", "Aktar");
console.log(person);

person.splice(1, 2);
console.log(person);

// ===== push() ===========
person.push("DDD");
person.push("TTT");
console.log(person);

// ===== reverse() ===========
person.reverse();
console.log(person);

// ===== sort() ===========
person.sort();
console.log(person);


// ===== indexOf() & lastIndexOf =====
const sum = person.indexOf("UUU");
console.log(sum);
const sum1 = person.indexOf("Bina");
console.log(sum1);
const sum4 = person.indexOf("Jon");
console.log(sum4);
const sum3 = person.lastIndexOf("Mina");
console.log(sum3);
const sum2 = person.lastIndexOf("Jenny");
console.log(sum2);


