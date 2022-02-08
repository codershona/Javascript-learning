`
You are going on a camping trip, but before you leave you need to buy groceries. To optimize your time spent in the store, instead of buying the items from your shopping list in order, you plan to buy everything you need from one department before moving to the next.

Given an unsorted list of products with their departments and a shopping list, return the time saved in terms of the number of department visits eliminated.

Example: 
products = [
    ["Cheese",          "Dairy"],
    ["Carrots",         "Produce"],
    ["Potatoes",        "Produce"],
    ["Canned Tuna",     "Pantry"],
    ["Romaine Lettuce", "Produce"],
    ["Chocolate Milk",  "Dairy"],
    ["Flour",           "Pantry"],
    ["Iceberg Lettuce", "Produce"],
    ["Coffee",          "Pantry"],
    ["Pasta",           "Pantry"],
    ["Milk",            "Dairy"],
    ["Blueberries",     "Produce"],
    ["Pasta Sauce",     "Pantry"]
]

list1 = ["Blueberries", "Milk", "Coffee", "Flour", "Cheese", "Carrots"]

For example, buying the items from list1 in order would take 5 department visits, whereas your method would lead to only visiting 3 departments, a difference of 2 departments.

Produce(Blueberries)->Dairy(Milk)->Pantry(Coffee/Flour)->Dairy(Cheese)->Produce(Carrots) = 5 department visits
New: Produce(Blueberries/Carrots)->Pantry(Coffee/Flour)->Dairy(Milk/Cheese) = 3 department visits

list2 = ["Blueberries", "Carrots", "Coffee", "Milk", "Flour", "Cheese"] => 2
list3 = ["Blueberries", "Carrots", "Romaine Lettuce", "Iceberg Lettuce"] => 0
list4 = ["Milk", "Flour", "Chocolate Milk", "Pasta Sauce"] => 2
list5 = ["Cheese", "Potatoes", "Blueberries", "Canned Tuna"] => 0

All Test Cases:
shopping(products, list1) => 2
shopping(products, list2) => 2
shopping(products, list3) => 0
shopping(products, list4) => 2
shopping(products, list5) => 0

Complexity Variable:
n: number of products


`

"use strict";

const products = [
  ['Cheese',          'Dairy'],
  ['Carrots',         'Produce'],
  ['Potatoes',        'Produce'],
  ['Canned Tuna',     'Pantry'],
  ['Romaine Lettuce', 'Produce'],
  ['Chocolate Milk',  'Dairy'],
  ['Flour',           'Pantry'],
  ['Iceberg Lettuce', 'Produce'],
  ['Coffee',          'Pantry'],
  ['Pasta',           'Pantry'],
  ['Milk',            'Dairy'],
  ['Blueberries',     'Produce'],
  ['Pasta Sauce',     'Pantry']
];

const list1 = ['Blueberries', 'Milk', 'Coffee', 'Flour', 'Cheese', 'Carrots'];
const list2 = ['Blueberries', 'Carrots', 'Coffee', 'Milk', 'Flour', 'Cheese'];
const list3 = ['Blueberries', 'Carrots', 'Romaine Lettuce', 'Iceberg Lettuce'];
const list4 = ['Milk', 'Flour', 'Chocolate Milk', 'Pasta Sauce'];
const list5 = ['Cheese', 'Potatoes', 'Blueberries', 'Canned Tuna'];


Real Solution:

// forEach method:

const shopping = (products, list) => {
  console.log(list1);
  console.log(list2);
  console.log(list3);
  console.log(list4);
  console.log(list5);
  console.log(products);
  
  list.forEach((value, index, item) => {
    console.log(value, index, item);
     console.log(list2[5])
    console.log(list3[5])
    console.log(list1[5])
     console.log(list5[4])
     console.log(list4[4])
  })
}
 shopping(products, list1);
shopping(products, list1, list2, list3, list4, list5);


// For Loop method
const shopping = (products, list) => {
  
  for (var i = 0; i < products.length; i++){
         console.log(products[i]);
}
 
   for (var j = 0; j < list.length; j++){
         console.log(list[j]);
}
  
  
   console.log(list1);
  console.log(list2);
  console.log(list3);
   console.log(list4);
   console.log(list5);
   console.log(products);
  
  list.forEach((value, index, item) => {
     console.log(value, index, item);
    console.log(list2[5])
     console.log(list3[5])
     console.log(list1[5])
     console.log(list5[4])
   console.log(list4[4])
  })
}
 shopping(products, list1


Instructor solution:
const shopping = (products, list) => {
     
  list.forEach((item) => {
      console.log(item);
      // Get me department of blueberry;
    
      // Iterate over my products and find blueberyy is belonging to which departement.      
  });
}

shopping(products, list1);
