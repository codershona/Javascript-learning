let obj1 = { a: true };
let obj2 = obj1;
obj1.a = 'buyaa';  // this is called pointer
delete obj1
obj2 = 'hello'
// console.log('1', obj1);
console.log('2',obj2);
