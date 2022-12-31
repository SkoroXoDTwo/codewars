/*
https://www.codewars.com/kata/5d5a7525207a674b71aa25b5/train/javascript

Given a triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

odd_row(1)  ==  [1]
odd_row(2)  ==  [3, 5]
odd_row(3)  ==  [7, 9, 11]
Note: your code should be optimized to handle big inputs.
*/

function oddRow(n) {
  let res = [];
  
  for(let i = 0; i < n; i++) {
    i === 0 ? res.push(n*(n-1) + 1) : res.push(res[i-1]+2)
  }
  
  return res;
}