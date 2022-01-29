/* Clone Graph */

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

Example 1:


Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
Example 2:


Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
Example 3:

Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.



SOLUTION:


Time Complexity: O(N+M) (DFS)

* To compute the sum, you need to go through all elements in nArr (size n) and all elements in mArr (size m), so the overall complexity is O(m+n)

* When we write O(m+n) it means that the algorithm will take O(m) time when m>n and O(n) when m<n. In any way, O(m+n) = O(max(m,n))

* For instance, summing up the elements of 2 vectors can be done in O(M+N), but it can be thought as O(N) (assuming N>M) or O(M) (if M>N)

Space Complexity: O(N)

    /*
        we need to create a deep copy of the graph,
        all nodes in the graph are connected,
        we can do it by traversing the graph and its neighbors,
        arrays are passed by reference, so we can only make use of val
        and call recursive function on neighbors
    */

// k -prep
const cloneGraph = (node)  => {
    let map = new Map();
    // we need to need another function
    function createGraph(node) {
        // using if conditions 1
        if(node === null) return node;
        // using if conditions 2
        if(map.has(node)) return map.get(node);
        
        let neighbors = [];
        let value = new Node(node.val, neighbors);
        
        // set method
        map.set(node, value);
        
        // using for loop of methods
        for(let neighbor of node.neighbors) {
            neighbors.push(createGraph(neighbor));
        }
        return value;
    }
    return createGraph(node);
};



