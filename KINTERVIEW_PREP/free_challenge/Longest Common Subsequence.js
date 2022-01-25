Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.



SOLUTION:

Time Complexity: O(N)
Space Complexity: O(N)


// ! means logical NOT
// ?? means Nullish Coalescing
// + as a assignment
const subdomainVisits = (cpdomains) => {
    if(!cpdomains)
        return 0;
    
    let map = new Map();
    // using  for loop method
    for (let i = 0; i < cpdomains.length; i++) {
        let [countDomain, urlDomain] = cpdomains[i].split(" ")
        map.set(urlDomain, +(map.get(urlDomain) ?? 0) + +countDomain)
                // using while conditions
                while(urlDomain.indexOf('.') > -1) {
            urlDomain = urlDomain.slice(urlDomain.indexOf('.') + 1)
            map.set(urlDomain, +(map.get(urlDomain) ?? 0) + +countDomain)
        }                
    }
        let arrayOne = [];
        // forEach((value, key) => { /* ... */ } )
        // using foreach method calls a function once for each array element.
        // loop for in method
        map.forEach((countDomain, webDomain) => {
            arrayOne.push(`${countDomain} ${webDomain}`)
        })
      return arrayOne;
};

