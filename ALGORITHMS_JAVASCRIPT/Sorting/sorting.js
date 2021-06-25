// Sorting
// The Issue With sort()
const letters = ['a', 'b', 'z', 'e', 'r', 'b'];
const basket = [2, 65, 34, 2, 1, 7, 8];
// letters.sort();
// basket.sort();
letters.sort(function (a, b) {
  return a.localeCompare(b);
}); // 'a', 'b' here basket will not work.


basket.sort(function (x, y) {
  return x - y;
});

// '65'.charCodeAt(0);
// '2'.charCodeAt(0);
// console.log('65'.charCodeAt(0));
// console.log('2'.charCodeAt(0));
// console.log('34'.charCodeAt(0));
// console.log('7'.charCodeAt(0));
