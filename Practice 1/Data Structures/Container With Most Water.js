// Container With Most Water (Medium)

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

SOLUTION:

const maxArea = (height) => {
    let index = 0;
    let point = height.length - 1;
    let maximum = -Infinity;
    // using while loop conditional statement
    while (index < point) {
        const minimum = Math.min(height[index], height[point]);
        // using array.prototype.max() method
        maximum = Math.max(maximum, minimum * [point - index]);
        // using if conditional statement
        if (height[index] < height[point]) {
            // block code to be executed
            index++;
            // using else statement
        } else {
            // block code to be executed
            point--;
        }        
    }
    return maximum;    
};


EXPLANATION:

Here, const has maxArea variable arrow function calls height parameter and now if we execute the code, the let variable has index variable equal 0, point variable has height array member with length minus 1 and maximum variable has -Infinity whihc is global object and scope. This while loop conditional statement method has index condition 1 less than point condition 2 whihc can be executed with const assign with minimum varaible equal Array.prototype.min() where Math member with min method that has height parameter with index array and height parameter has point array. Next, it has maximum varaibale equal Math.max() method that calls the maximum variable as an parameter comma minimum variable as parameter Multiplication with point array minus index array. Now if we have conditions the height parameter will have index variable as an parameter less than heights parameter whihc has point array. Now we can execute the block of the code where index variable has increment. Otherwise, else statement has point variable which has decrement. Finally it returns to nds function execution and specifies a value to be returned to the function caller with the expression of maximum variable. 








