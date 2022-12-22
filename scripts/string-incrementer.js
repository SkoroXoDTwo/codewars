/*
https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  function isInt(index){
    return !isNaN(parseFloat(strng.at(index)))
  }
  
  if(!isInt(-1)) return strng + '1';
  let numStr = '';
  
  for(let i = 0; i < strng.length; i++) {  
    if(!isInt(strng.length - i - 1)) break;

    numStr = strng.at(strng.length - i - 1) + numStr;
  }
  
  
  let num = String(parseFloat(numStr) + 1)

  
  if(num.length < numStr.length) {
    for(let i = 0; i <= numStr.length - num.length; i++) {
      num = '0' + num;
    }
  }
  
  return strng.substr(0, strng.length - numStr.length) + num
}