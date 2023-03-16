/*
https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

function twoHighest(arr) {
  if(arr.length === 0) return []
  
  arr.sort(function(a, b) {
    return b - a;
  });
  
  arr = arr.reduce((acc, item) => {
    if(acc[acc.length - 1] !== item) return [...acc, item]
    return [...acc]
  }, [])
  
  return arr.slice(0, 2);
}