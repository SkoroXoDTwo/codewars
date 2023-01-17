/*
https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript

Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

function permuteAPalindrome (input) {
  if(input.lenght === (0 || 1)) return true;
  const countChar = {};
  let oddCount = 0;

  for(let i = 0; i<input.length; i++) {
    if(countChar[input[i]])
      countChar[input[i]]++
    else
      countChar[input[i]] = 1;
  }
  
  for(let key in countChar) {
    if(countChar[key] %2 !== 0)
      oddCount++;
  }
  
  
  return input.length % 2 === 0 && oddCount === 0 ? true : input.length % 2 !== 0 && oddCount === 1 ? true : false;
}
