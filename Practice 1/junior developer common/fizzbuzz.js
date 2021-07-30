// fizzbuzz
/**
 * @param {number} n
 * @return {string[]}
 */


function fizzBuzz(n) {
    let sequel = [];
    for (let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            sequel.push("FizzBuzz");
        } else if (i % 3 == 0) {
                sequel.push("Fizz");
            } else if (i % 5 == 0) {
                    sequel.push("Buzz");
                } else {
                    sequel.push(String(i));
                }
            }

    return sequel;
};
