// Detect Cycle in a Linked List (EASY)

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) (i.e. constant) memory?

SOLUTION:
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    let index = head;
    let cycle = head;
    // using while loop conditional statement
    while (index && index.next) {
        // to execute the code
        index = index.next.next;
        cycle = cycle.next;
        // using if statement
        if (index == cycle) {
            // to execute the code
            return true;
        }
    }
    return false;
};
EXPLANATION:

Here, we had hasCycle const variable where the arrow functions calls head parameter. Now we can execute the code, where we had index and cycle let variable which is equal head parameter. Then, using while conditions here we had index condition 1 and logical AND with index mmber with next as an condition 2. To execute the code block, the index variable condition is equal index member with next and memebr with next. On the other hand, cycle variable is equal cycle variable member with next element conditions. If the statement 1 index variable condition is strict equal cycle variable it will return true. Finally it reutrns the false expression. 

