/* 
https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100 
*/

function validParentheses(parens) {
  let res = 0
  parens = parens.split('');
  parens.forEach((item) => {
    if(res === -1) {return false};
    switch(item) {
        case '(': res += 1; break;
        case ')': res -= 1; break;
    }
  });
  return res === 0 ? true : false;
}