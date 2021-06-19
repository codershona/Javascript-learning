// O(n)

const nemos = ['nemos'];
const fruits = ['strawberry','pineapple','apricot','pears','pomegranate','lychee','mango','banana','orange','apple'];

const larger = new Array(10000).fill('nemos');

function findNemos(array) {
  // let y0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemos') {
      console.log('We had found NEMOS!!!');
    }
  }
  // let y1 = performance.now();
  // console.log('Calling to find Nemos ' + (y1-y0) + ' miliseconds');
}

findNemos(larger); // O(n) ---> Linear Time

// example 2:

// ES5

function compressInAllElements(elements) {
  elements.forEach(function(itemsOne) {
    console.log(itemsOne);
  });
}

// ES6

const compressAllElements = elementsOne => {
  elementsOne.forEach(element => console.log(element));
}




