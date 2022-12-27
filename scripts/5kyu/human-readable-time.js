/*
https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (times) {
  let hours = Math.floor(times / 3600);
  let minuts = Math.floor((times - (hours * 3600)) / 60);
  let second = times - (hours * 3600) - (minuts * 60);
                                            
  return `${hours < 10 ? "0" + hours : hours}:${minuts < 10 ? "0" + minuts : minuts}:${second < 10 ? "0" + second : second}`;
}