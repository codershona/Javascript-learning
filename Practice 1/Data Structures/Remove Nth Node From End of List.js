// Remove Nth Node From End of List (Medium)

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

SOLUTION:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n)  => {
    var leftHand, beforePass, rightHand = head;
    leftHand = beforePass = {next : head};
    // while conditions
    while (n--) rightHand = rightHand.next;
    // while conditions
    while(rightHand) {
        rightHand = rightHand.next;
        leftHand = leftHand.next;
    }
    leftHand.next = leftHand.next.next;
    return beforePass.next;    
};



EXPLANATION:
Here, we had a const with removeNthFromEnd  variable which has arrow functions that calls head and n as two parameters. Execute the code block, using var which has three variables with lefthand, beforePass and righthand equal head parameter. So, in this case, if we had leftHand variable which is equal beforePass variable which is equal an object with next property which is condition to head parameter. Now we had while conditions where, it has n decrement parameters assign with righthand variable equal rightHand variable member with next variable. Now, we had while here righthand variable as an conditions to execute the code rightHand variable is equal to righthand variable member with next variable and LEFTHAND VARIABLE equal lefthand variable member with next variable. Then, lefthand varaiable is member with next varaiable which is equal to lefthand variable member with next member with next variable. Finally it returns beforepass variable member with next varible that is called expression.


