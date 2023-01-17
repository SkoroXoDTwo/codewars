/*
https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript

Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/

function isAlt(word) {
  const vowels = "aeuoyi";
  const isFirstVowels = vowels.includes(word[0])
  
  for(let i = 0; i < word.length; i++) {
    if(i%2===0 && vowels.includes(word[i]) !== isFirstVowels) {
      return false;
    }
    if(i%2!==0 && vowels.includes(word[i]) === isFirstVowels) {
      return false;
    }
  }

  return true;
}
