/*
https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

function sevenAte9(str) {
  return str.replaceAll('797', "77").replaceAll('797', "77")
}