// Reverse a Linked List (EASY)


Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

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
 * @return {ListNode}
 */
const reverseList = (head) => {
    // execute the code 
    // earlier + next are objectname
    // . is member operator
    let earlier = null;
    // using while conditional statement
    while(head) {
        // execute the code
        const next = head.next
        head.next = earlier
        earlier = head
        head = next
    }
    return earlier;
};


EXPLANATION:

Here, the const has reverseList variable which is arrow function with head parameter and now we can execute the code where it has let with earlier variable equall null. Now we can use while conditional statement, where it has head parameter as an condition and to execute the code, it has const next variable which is equal head parameter meber operator woth next variable. Next the head parameter member of next variable is equal earlier variable. Then, earlier variable equal head parameter and then head parameter equal next variable. Finally it return the expression whihc was earlier variable. 
