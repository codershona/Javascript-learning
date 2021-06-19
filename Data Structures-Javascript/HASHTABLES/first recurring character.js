// first recurring character

// Most important interview question which came in google

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      // if statement and does that equal to input j
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  // after doing this all the work if nothing happens we can defined it as undefined
  return undefined;
} // O(N^2)
// O(1)

// 2nd function:
function firstRecurringCharacterTwo (input) {
  let map = {};

  // for loops
  for (let i = 0; i < input.length; i++) {
    // console.log(map[input[i]]);
      // console.log(undefined);
       //  console.log(map[2]);
    // if(map[input[i]]) {
       if(map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  //  console.log(map);
  return undefined;
} // O(n)

firstRecurringCharacterTwo([2,5,1,2,3,5,1,2,4]);

// firstRecurringCharacter([1,5,1,2,3,5,1,2,4]);
// firstRecurringCharacter([]);
// firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
// firstRecurringCharacter([2,5]);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2