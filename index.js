// const nemos = ['nemos'];
// const fruits = ['strawberry','pineapple','apricot','pears','pomegranate','lychee','mango','banana','orange','apple'];

// const larger = new Array(10000).fill('nemos');

// function findNemos(array) {
//   // let y0 = performance.now();

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemos') {
//       console.log('We had found NEMOS!!!');
//     }
//   }
//   // let y1 = performance.now();
//   // console.log('Calling to find Nemos ' + (y1-y0) + ' miliseconds');
// }

// findNemos(larger); // O(n) ---> Linear Time


// const elementsTwo = [00, 11, 22, 33, 44, 55];
// function logFirstTwoArrays(elementsTwo) {
//   console.log(elementsTwo[0]); // 0(1)
//   console.log(elementsTwo[1]);  // O(1)
// }

// logFirstTwoArrays(elementsTwo); // O(2)

// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

// // it is for loop
//   for (let i = 0; i < input.length; i++) { //O(n) or O(input)
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // a + 1 // O(n)
//   }
//   return a; // O(1)
// }
// Big 0(n)
// // BIG O(3 + 4n)

// // funChallenge();
// // 3 + n + n + n + n
// // 3 + 4n is a BIG O Notation


// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   // this is for loop which is running based on input
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)

//   }
//   for (let j = 0; j < input; j++) {
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

// anotherFunChallenge();
// Big 0(n)
// BIG O(4 + 5n)



// const box = [11, 22, 33, 44, 55];
// const box = ["11", "22", "33", "44", "55"];
// const box = ["a", "c", "x", "y", "z"];

// function logAllPairArrays(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       // console.log( i, j);
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// logAllPairArrays(box);

// O(n * n)
// O(2 ^ n)

// function printAllNumbersThenAllPairSums(numbers) {

//   console.log('these are the numbers:');
//   numbers.forEach(function(number) {
//     console.log(number);
//   });

//   console.log('and these are their sums:');
//   numbers.forEach(function(firstNumber) {
//     numbers.forEach(function(secondNumber) {
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }

// printAllNumbersThenAllPairSums([1,2,3,4,5])

// O(n + n ^ 2)

// O(x ^ 2 + 3x + 100 + x / 2)
// 
// Most important to study more : https://www.bigocheatsheet.com/




// O(n!)

// function boooo(n) {
//     for (let i = 0; i < n; i++) {
//         console.log('booooo');
//     }
// }


// function boooo(n) {
//     for (let i = 0; i < n.length; i++) {
//         console.log('booooo');
//     }
// }
// boooo([1,2, 3, 4, ,5 ,6]);

// function arrayOfHiNTimes(n) {
//     var hiArray = [];
//     for (let i = 0; i < n; i++) {
//         // hiArray[i] = 'hi hello world big O';
//         hiArray[i] = 'hi';
//     }
//     return hiArray;
// }

// arrayOfHiNTimes(6);



// #6 Space complexity O(n)
// function arrayOfHiNTimes(n) {
//     var hiArray = [];
//     for (let i = 0; i < n; i++) {
//         // hiArray[i] = 'hi hello world big O';
//         hiArray[i] = 'hi';
//     }
//     return hiArray;
// }

// arrayOfHiNTimes(6)


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