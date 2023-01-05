/*
https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

function calc(x){

  const calculateCode = (str) => {
    return str.split('').map(char => char.charCodeAt(0)).join('');
  };
  
  const sumCode = (str) => {
    return Number(str.split('').reduce((res, char) => res+=Number(char), 0));
  }
  
  const total1 = calculateCode(x);
  const total2 = total1.replaceAll('7', '1');

  return sumCode(total1) - sumCode(total2);
}