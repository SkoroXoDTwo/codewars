/*
https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
*/

function removeParentheses(str){
  str = str.split('');
  let count = 0;
  
  let res = str.map((item) => {
    switch(item) {
      case '(': count++; break;
      case ')': count--; break;
      default: if(count === 0) return item;
    }
        
  }).join('');
  
  return res;
}