/*
https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/train/javascript

You are given an input string.

For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.
Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.

*/

function numericals(str){
  const charCount = {};
  
  const res = str.split('').map((char) => {
    if(charCount[char]) charCount[char]++;
    else charCount[char]=1;
    return charCount[char];
  }).join('');
  
  return res
}