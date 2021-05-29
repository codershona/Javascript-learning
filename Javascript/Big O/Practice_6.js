// Big O rule 2
// O(n ^ 2)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

O(1 + n/2 + 100)
O(1 + n/2 + 1)
O(n + 1)
O(a + 50)
O(2n)
O(n)

// Big O rule 2:
// remove constants
// example 2:

function compressInAllElements(elements, elementsTWO) {
  elements.forEach(function(elements) {
    console.log(elements);
  });

  elementsTWO.forEach(function(elements) {
    console.log(elements);
  });
}

O(n)
O(2n)
O(a + b)
O(a * b)

// Big O rule 3 :
// Different terms for input

// O(n ^ 2)
// LOG all pairs of Array
// const box = [11, 22, 33, 44, 55];
const box = ["11", "22", "33", "44", "55"];

function logAllPairArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // console.log( i, j);
      console.log(arr[i], arr[j]);
    }
  }
}

logAllPairArrays(box);



// Big O rule 4:
// Drop non dominants


function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

O(n + n ^ 2)

O(x ^ 2 + 3x + 100 + x / 2)

O(x ^ 3)
// O(n + n ^ 2)

// O(x ^ 2 + 3x + 100 + x / 2)
// 
// Most important to study more : https://www.bigocheatsheet.com/




// O(n!)


// spaceComplexity :

// Exercise : Space Complexity:

//#5 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}

// function boooo(n) {
//     for (let i = 0; i < n.length; i++) {
//         console.log('booooo');
//     }
// }
// boooo([1,2, 3, 4, ,5 ,6]);

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        // hiArray[i] = 'hi hello world big O';
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6);

// another example
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n.length; i++) {
        // hiArray[i] = 'hi hello world big O';
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6);

// example 

function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booooo');
    }
}
boooo([1,2, 3, 4, ,5 ,6]);

function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        // hiArray[i] = 'hi hello world big O';
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6); // O(n)

// Exercise : Twitter

// Find 1st, Find Nth...
const array = [{
  tweet: 'hi',
  date: 2012
  }, {
  tweet: 'hello',
  date: 2016
  }, {
   tweet: 'teddy',
   date: 2019
}];

// O(n ^ 2);
// 'hgfdrerxrctfyu'.length // O(1)

// array[0]; //O(1)
// array[2];
// array[array.length-1]; //O(1)

// Javascripts Loops

const nemo = ['nemo'];

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo1(nemo);

const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === 'nemo') {
      console.log('Find nemo');
    }
  })
}


const findNemo3 = array => {
  for (let fish of array) {
    if(fish === 'nemo') {
      console.log('Find nemo');
    }
  }
}

findNemo2(nemo)

findNemo3(nemo)






