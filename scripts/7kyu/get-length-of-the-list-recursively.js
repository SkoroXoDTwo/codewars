/*
https://www.codewars.com/kata/57a83e447cb1f32de80000d5/train/javascript

Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.
*/

function lenR(x, count = 0) {
  return x[count] !== undefined ? lenR(x, count+1) : count;
}