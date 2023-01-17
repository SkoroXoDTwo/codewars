/*
https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

function solve(str){
  str = str.split('')
  
  const sumLengthFilterStr = (str, indexStart, indexEnd) => {
    return str.filter((char) => char.charCodeAt(0) > indexStart && char.charCodeAt(0) < indexEnd).length;
  }
  
  const uppercase = sumLengthFilterStr(str, 64, 91);
  const lowercase = sumLengthFilterStr(str, 96, 123);
  const numbers = sumLengthFilterStr(str, 47, 58);
  const special = str.length - uppercase - lowercase - numbers;
  
  return [uppercase, lowercase, numbers, special]
}