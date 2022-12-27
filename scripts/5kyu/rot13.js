/*
https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
  message =  message.split('');
  
  return message.map((char) => {
    
    if(char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) {
      if(char.charCodeAt(0) > 109) return String.fromCharCode(char.charCodeAt(0) - 109 + 96);
      return String.fromCharCode(char.charCodeAt(0) + 13);
    }
    
    if(char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {
      if(char.charCodeAt(0) > 77) return String.fromCharCode(char.charCodeAt(0) - 77 + 64);
      return String.fromCharCode(char.charCodeAt(0) + 13);
    }
    
    return char
    
  }).join('');
}