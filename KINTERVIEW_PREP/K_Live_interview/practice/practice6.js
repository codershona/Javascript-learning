const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
  if (word === 'two') {
    words.shift(); //'one' will delete from array
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']

const products = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];
// products.forEach(product => console.log(product.name));

products.forEach((item) => {
  console.log(item.name);
  console.log(item.price);
  console.log(item.color);
  console.log(item.brand);
})



const apps = ['WhatsApp', 'Instagram', 'Facebook'];
const playStore = [];

apps.forEach(function(item){
  playStore.push(item)
});

console.log(playStore);


let arr2 = [1, 2, 3, 4, 5];

arr2.forEach(item => {
    if(item == 3) {
        arr2.shift();
    }
    console.log(item);
});

var sum = 0;  
var arr3 = [10,18,12,20];  
  
arr3.forEach(function myFunction(element) {  
    sum= sum+element;  
});  
console.log(sum);

const numbers = [1,2,3,4,5]

numbers.filter(num => num % 2 !== 0).forEach(num => {
  console.log(num)
})

//output : 1, 3, 5