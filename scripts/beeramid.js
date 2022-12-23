/*
https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

your referral bonus, and

the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16

*/

// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  let level = 0;
  
  function counter(count) {
    if((level + 1) ** 2 <= count) {
      level += 1;
      counter(count - ((level) ** 2))
    }
  }
  
  counter(Math.floor(bonus / price));
  return level;
}