/* Longest Common Substring */


Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.
Examples :

Input : X = “GeeksforGeeks”, y = “GeeksQuiz”
Output : 5 or Geeks
The longest common substring is “Geeks” and is of length 5.
Input : X = “abcdxyz”, y = “xyzabcd”
Output : 4 or abcd
The longest common substring is “abcd” and is of length 4.
Input : X = “zxabcdezy”, y = “yzabcdezx”
Output : 6 or abcdez
The longest common substring is “abcdez” and is of length 6.
Idea:
Use dynamic programming to compare each pair of characters from the beginning.
Update the length of substring according to the previous length.
Time: O(|X| * |Y|) , Space: O(|X| * |Y|) .



SOLUTION:


Approach:
Let m and n be the lengths of the first and second strings respectively.

A simple solution is to one by one consider all substrings of the first string and for every substring check if it is a substring in the second string. Keep track of the maximum length substring. There will be O(m^2) substrings and we can find whether a string is substring on another string in O(n) time (See this). So overall time complexity of this method would be O(n * m2)

Dynamic Programming can be used to find the longest common substring in O(m*n) time. The idea is to find the length of the longest common suffix for all substrings of both strings and store these lengths in a table. 

The longest common suffix has following optimal substructure property. 
If last characters match, then we reduce both lengths by 1 
LCSuff(X, Y, m, n) = LCSuff(X, Y, m-1, n-1) + 1 if X[m-1] = Y[n-1] 
If last characters do not match, then result is 0, i.e., 
LCSuff(X, Y, m, n) = 0 if (X[m-1] != Y[n-1])
Now we consider suffixes of different substrings ending at different indexes. 
The maximum length Longest Common Suffix is the longest common substring. 
LCSubStr(X, Y, m, n) = Max(LCSuff(X, Y, i, j)) where 1 <= i <= m and 1 <= j <= n 
 
Time Complexity: O(m*n) 
Auxiliary Space: O(m*n)

<script>
// JavaScript implementation of the above approach
 
    // Function to find the length of the
    // longest LCS
    function LCSubStr(s, t, n, m)
    { 
       
        // Create DP table
        var dp = Array(2).fill().map(()=>Array(m+ 1).fill(0));
        var res = 0;
      
        for(var i = 1; i <= n; i++)
        {
            for(var j = 1; j <= m; j++)
            {
                if(s.charAt(i - 1) == t.charAt(j - 1))
                {
                    dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
                    if(dp[i % 2][j] > res)
                        res = dp[i % 2][j];
                }
                else dp[i % 2][j] = 0;
            }
        }
        return res;
    }
   
    // Driver Code
        var X = "OldSite:GeeksforGeeks.org";
        var Y = "NewSite:GeeksQuiz.com";
         
        var m = X.length;
        var n = Y.length;
         
        // Function call
        document.write(LCSubStr(X, Y, m, n));
 
// This code is contributed by shivanisinghss2110
</script>


# Another Question:

We can optimize the space complexity to O(min(|X|,|Y|)) by only initialize the count as a vector of
size min(|X|,|Y|) .


Time Complexity: O(n*m)
Auxiliary Space: O(min(m,n))


<script>
// JavaScript implementation of the above approach
 
    // Function to find the length of the
    // longest LCS
    function LCSubStr(s, t, n, m)
    { 
       
        // Create DP table
        var dp = Array(2).fill().map(()=>Array(m+ 1).fill(0));
        var res = 0;
      
        for(var i = 1; i <= n; i++)
        {
            for(var j = 1; j <= m; j++)
            {
                if(s.charAt(i - 1) == t.charAt(j - 1))
                {
                    dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
                    if(dp[i % 2][j] > res)
                        res = dp[i % 2][j];
                }
                else dp[i % 2][j] = 0;
            }
        }
        return res;
    }
   
    // Driver Code
        var X = "OldSite:GeeksforGeeks.org";
        var Y = "NewSite:GeeksQuiz.com";
         
        var m = X.length;
        var n = Y.length;
         
        // Function call
        document.write(LCSubStr(X, Y, m, n));
 
// This code is contributed by shivanisinghss2110
</script>
