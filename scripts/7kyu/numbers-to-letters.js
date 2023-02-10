/*
https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.


*/

function switcher(x){
  const res = x.map((item) => {
    switch(Number(item)) {
        case 27: 
          return '!'; 
        case 28: 
          return '?'; 
        case 29: 
          return ' '; 
        default: 
          return String.fromCharCode(123 - item);
    }
  }).join('');
  
  return res;
}