// Fruit Into Baskets (MEDIUM)
// Arrays & Strings
// Median Employee Scores
// What is this?
// Google - 6.97
// Facebook - 5.81
// Amazon - 5.27
// Microsoft - 5.36

QUESTION:

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

 

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
Example 4:

Input: fruits = [3,3,3,1,2,1,1,2,3,3,4]
Output: 5
Explanation: We can pick from trees [1,2,1,1,2].
 

Constraints:

1 <= fruits.length <= 105
0 <= fruits[i] < fruits.length



SOLUTION:
/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = fruits => {
    let map = new Map();
    let maximum = -1;
    let length = fruits.length;
    // using for loop method
    for (let y = 0, x = 0; x < length; x++) {
        // execute the code
        let singleElement = fruits[x];
        map.set(singleElement, map.get(singleElement) + 1 || 1)
        // using while statement
        while(map.size > 2) {
            let character = fruits[y];
            let characterCount = map.get(character);
            if(characterCount -1 === 0)
                map.delete(character)
            else map.set(character, characterCount - 1)
            y++;
        }
        // using if statement
        if(map.size >= 1)
            maximum = Math.max(maximum, x + 1 - y)        
    }
    return maximum;
    
};
