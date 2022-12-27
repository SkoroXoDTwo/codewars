/*

Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]

*/

function squares(x, n) {
  let res = []
  while(n > 0) {
    res.push(x)
    x = x ** 2
    n = n-1;
  }
  
  return res
}
