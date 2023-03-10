/*
https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript

Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

var Ghost = function() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const colors = ['red', "white", "yellow", "purple"]
  
  this.color = colors[getRandomInt(4)]
};