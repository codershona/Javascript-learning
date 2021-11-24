// Minimum unique array sum  (Hackerrank)

Question: Given a sorted integer array, return sum of array so that each element is unique by adding some numbers to duplicate elements so that sum of unique elements is minimum.

I.e., if all elements in the array are unique, return the sum. If some elements are duplicates, then increment them to make sure all elements are unique so that the sum of these unique elements is minimum.

Some examples:

input1[] = { 2, 3, 4, 5 } => return 19 = 2+3+4+5 (all elements are unique, so just add them up)
input2[] = { 1, 2, 2 } => return 6 = 1+2+3 (index 2 is duplicate, so increment it)
input3[] = { 2, 2, 4, 5 } => return 14 = 2+3+4+5 (index 1 is duplicate, so increment it)

OR,


# Given an array, increment any duplicate elements until all its elements are
# unique. In addition, the sum of its elements must be the minimum possible
# within the rules.
# For example if arr = [3, 2, 1, 2, 7], then arrMin will be [3, 2, 1, 4, 7]
# and its elements sum to minimal value of 3 + 2 + 1 + 4 + 7 = 17

OR,

Given an array, you must increment any duplicate elements until all its elements are unique. In addition, the sum of its elements must be the minimum possible within the rules. For example, if arr = [3, 2, 1, 2, 7], then arrunique = [3, 2, 1, 4, 7] and its elements sum to a minimal value of 3 + 2 + 1 + 4 + 7 = 17.


SOLUTION:

In JavaScript

var list = [1, 1, 1, 10, 3, 2];

function minUniqueSum(arr) {
  const temp = arr.reduce((acc, cur) => {
    while (acc.includes(cur)) cur++;
    acc.push(cur);
    return acc;
  }, []);
  console.log(temp); // [1, 2, 3, 10, 4, 5]
  return temp.reduce((acc, cur) => acc + cur, 0);
}

var result = minUniqueSum(list);
console.log(result); // 25
