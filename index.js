// reverse a string


function reverse(str) {
  // check input 
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'that is not good';
  } 

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
    // str.split()
  }
  console.log(backwards);

  // return backwards.toString
  return backwards.join('');
}


function reverseTwo(str) {
  return str.split('').reverse().join('');
}


// create one line function by using es6
// const reverseThree = str => str.split('').reverse().join('');

const reverseThree = str => [...str].reverse().join('');
// reverse('I am learning Data Structures Arrays')
// reverseTwo('I am learning Data Structures Arrays')
reverseThree('I am learning Data Structures Arrays')




