/*
https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
  return s.split('').map((char) => char.charCodeAt(0) > 96 ? char.toUpperCase() : char.toLowerCase()).join('');
}