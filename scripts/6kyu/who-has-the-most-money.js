/*
https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript

You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money
*/

function mostMoney(students) {
  let maxMoney = 0;
  let res = "";
  
  students.forEach((student, i)=> {
    let currentMoney = 0;
    currentMoney += student.fives * 5;
    currentMoney += student.tens * 10;
    currentMoney += student.twenties * 20;
    console.log(currentMoney)
    if(currentMoney >= maxMoney) {
      if(i === students.length - 1 && currentMoney === maxMoney) {
        res = "all";
      }
      else {
        maxMoney = currentMoney;
        res = student.name;
      }
    }
  });
  
  return res;
}