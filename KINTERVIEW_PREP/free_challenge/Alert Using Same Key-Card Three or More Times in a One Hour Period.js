LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. The system emits an alert if any worker uses the key-card three or more times in a one-hour period.

You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person's name and the time when their key-card was used in a single day.

Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.

Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "22:51" - "23:52" is not considered to be within a one-hour period.

 

Example 1:

Input: keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
Output: ["daniel"]
Explanation: "daniel" used the keycard 3 times in a one-hour period ("10:00","10:40", "11:00").
Example 2:

Input: keyName = ["alice","alice","alice","bob","bob","bob","bob"], keyTime = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
Output: ["bob"]
Explanation: "bob" used the keycard 3 times in a one-hour period ("21:00","21:20", "21:30").



SOLUTION:

### How to calculate the time complexity of our code when we have the following elements:

* Basic operations like assignments, bit, and math operators.
* Loops and nested loops
* Function invocations and recursions.

## Time Complexity : O(n^2)

* Nested loops statements and Logarithmic Time Loops.
* However, if only fn1 and fn2 are constant and fn3 has a runtime of O(n^2).
* In general, you will have something like this:
1 T(n) = n * [ t(fn1()) + n * [ t(fn2()) + n * [ t(fn3()) ] ]


## Space Complexity: O(n^2)

* Space Complexity = Auxiliary space + Space use by input values.

* O(n^2) – square/polynomial complexity – space complexity grows proportionally to the square of the input size.

* If we create a two-dimensional array of size n*n, this will require O(n2) space.

// ++i is prefix increment
// localeCompare method

const alertNames = (keyName, keyTime)  => {
    let workerTimes = [];
    let maps = new Map();
    let currentTime;
    let totalTimes;
    
    // using for loop method 1
    for (let i = 0; i < keyName.length; ++i) {
        currentTime = maps.get(keyName[i]);
        totalTimes = keyTime[i].split(":").map(j => +j);
        // using if/else conditions
        if (!currentTime) {
            maps.set(keyName[i], [totalTimes[0] * 60 + totalTimes[1]]);
        } else {
            currentTime.push([totalTimes[0] * 60 + totalTimes[1]]);
        }
    }
    
    // using for loop of method 2
    for (let [workerTime, totalTime] of maps) {
        totalTime.sort((x, y) => x - y);
        // using for loop method 3
        for (let i = 1; i < totalTime.length; ++i) {
            // here we will use only if conditions
            if ((totalTime[i] - totalTime[i - 2] <= 60)) {
                workerTimes.push(workerTime)
                break;
            }
        }
    }
    workerTimes.sort((x, y) => x.localeCompare(y))
    return workerTimes;    
};


console.log("daniel","daniel","daniel","luis","luis","luis","luis");
console.log("10:00","10:40","11:00","09:00","11:00","13:00","15:00");