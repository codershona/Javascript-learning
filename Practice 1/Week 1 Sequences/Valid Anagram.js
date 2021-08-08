// Valid Anagram (Easy)

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram (s, t) {
    let odd = s.split("").sort().join();
    let binary = t.split("").sort().join();
    return odd === binary;
    
};

// Or, ES6 method using With Arrow Function:

Solution 1:


const isAnagram = (s, t) => {
    let odd = s.split("").sort().join();
    let binary = t.split("").sort().join();
    return odd === binary;
    
};



Explanation: 
Here, we use const variable which has isAnagram object that has two parameters with arrow function to execute the let variables with odd and binary object equal using split() method splits a string into an array of substrings, and returns the new array. Here the s parameter is working as strings that uses with member(.) by split() that has empty string ("") is used as the separator, the string has with member(.) split between each character. Same as t parameter was declaring as string with split empty seperator withwith member(.) by the sort() method sorts the elements of an array that does not has any compareFunction parameter and also has with member(.) by the join() method method returns an array as a string and this does not has any seperator parameter. Finally, it returns odd equal value which is also known as Strict equal that has binary. 


Value	Operator	Description	Example
21	( )	Expression grouping	(3 + 4)
 	 	 	 
20	.	Member	person.name
20	[]	Member	person["name"]
20	()	Function call	myFunction()
20	new	Create	new Date()
 	 	 	 
18	++	Postfix Increment	i++
18	--	Postfix Decrement	i--
 	 	 	 
17	++	Prefix Increment	++i
17	--	Prefix Decrement	--i
17	!	Logical not	!(x==y)
17	typeof	Type	typeof x
 	 	 	 
16	**	Exponentiation (ES2016)	10 ** 2
 	 	 	 
15	*	Multiplication	10 * 5
15	/	Division	10 / 5
15	%	Division Remainder	10 % 5
 	 	 	 
14	+	Addition	10 + 5
14	-	Subtraction	10 - 5
 	 	 	 
13	<<	Shift left	x << 2
13	>>	Shift right	x >> 2
13	>>>	Shift right (unsigned)	x >>> 2
 	 	 	 
12	<	Less than	x < y 
12	<=	Less than or equal	x <= y
12	>	Greater than	x > y
12	>=	Greater than or equal	x >= y
12	in	Property in Object	"PI" in Math
12	instanceof	Instance of Object	instanceof Array
 	 	 	 
11	==	Equal	x == y
11	===	Strict equal	x === y
11	!=	Unequal	x != y
11	!==	Strict unequal	x !== y
 	 	 	 
10	&	Bitwise AND	x & y
9	^	Bitwise XOR	x ^ y
8	|	Bitwise OR	x | y
7	&&	Logical AND	x && y
6	||	Logical OR	x || y
5	??	Nullish Coalescing	x ?? y
4	? :	Condition	? "Yes" : "No"
 	 	 	 
3	+=	Assignment	x += y
3	/=	Assignment	x /= y
3	-=	Assignment	x -= y
3	*=	Assignment	x *= y
3	%=	Assignment	x %= y
3	<<=	Assignment	x <<= y
3	>>=	Assignment	x >>= y
3	>>>=	Assignment	x >>>= y
3	&=	Assignment	x &= y
3	^=	Assignment	x ^= y
3	|=	Assignment	x |= y
 	 	 	 
2	yield	Pause Function	yield x
1	,	Comma	5 , 6







