/*
https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

function ipsBetween(start, end){
  start = start.split('.');
  end = end.split('.');
  
  return ((Number(end[0]) - Number(start[0])) * Math.pow(256, 3)) +
         ((Number(end[1]) - Number(start[1])) * Math.pow(256, 2)) +
         ((Number(end[2]) - Number(start[2])) * Math.pow(256, 1)) + 
         (Number(end[3]) - Number(start[3]))
}