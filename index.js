// Bubble Sort:
// bubble sort is one fo the simplest sorting algorithm and it is least efficient
// what do you think the time complexity and space complexity of the sorting algorithm?
// 
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;

  // for loop method
  for (let i = 0; i < length; i++) {
    for ( let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // swap numbers
        // let tempory_variable = array[i];
        let tempory_variable = array[j];
        array[j] = array[j + 1];
        // array[j + 1] = array[j];
         array[j + 1] = tempory_variable;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

