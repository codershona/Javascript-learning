const items = [
  { products: 'Chocolate', cost: 10 },
  { products: 'Strawberries', cost: 24 },
  { products: 'Avacado', cost: 50 },
  { products: 'Lemon', cost: 9 },
  { products: 'Red Apple', cost: 20 },
  { products: 'Banana', cost: 16 },
  { products: 'Saffron', cost: 500 },
  { products: 'Dates', cost: 1000 }
]

// Array method filter()
// filter()
const filterProducts = items.filter((item) => {
  return item.cost <= 80
  
});
// Array method map()
// map()
const mapProducts = items.map((item) => {
//   return item.products && item.cost;
  return item.products;
  
});

console.log(mapProducts);


// Array method find()
// find()
const findProducts = items.find((item) => {
  return item.products === 'Red Apple'; 
});
console.log(findProducts);


// Array method forEach()
// forEach()
const lowCostProducts = (products, items) => {
  items.forEach((item) => {
  console.log(item.products);
  console.log(item.cost);
});
}


console.log(lowCostProducts, items);

// forEach()
items.forEach((item) => {
  console.log(item.products);
  console.log(item.cost);
});


// Array method some()
// some()
const lowCostProducts1 = items.some((item) => {
//   return item.cost <= 17
  return item.cost <= 0
});

console.log(lowCostProducts1);



// Array method every()
// every()
const total = items.every((item) => {
//   return item.cost <= 17
  return item.cost <= 17
});

console.log(total);



// Array method reduce()
// reduce()
const totalReduce = items.reduce((currentTotal, item) => {
  return item.cost + currentTotal
}, 0);

console.log(totalReduce);


// Array method includes()
// includes()
const item = [2, 4, 6, 8, 10];
const totalIncludes = item.includes(3);
const totalIncludes2 = item.includes(8);
console.log(totalIncludes);
console.log(totalIncludes2);


