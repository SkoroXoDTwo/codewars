/*
https://www.codewars.com/kata/590adadea658017d90000039/train/javascript

Introduction
Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

Task
You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
Rules
1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.
Scoring
Item
Three of the same
Two of the same
Two of the same plus one Wild
Wild
100
10
N/A
Star
90
9
18
Bell
80
8
16
Shell
70
7
14
Seven
60
6
12
Cherry
50
5
10
Bar
40
4
8
King
30
3
6
Queen
20
2
4
Jack
10
1
2
 

Returns
Return an integer of the score.
*/

function fruit(reels, spins){
  const item = {
    "Wild": 10,
    "Star": 9,
    "Bell": 8,
    "Shell": 7,
    "Seven": 6,
    "Cherry": 5,
    "Bar": 4,
    "King": 3,
    "Queen": 2,
    "Jack": 1,
  }
  const res = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]]
  console.log(res);
  if(res[0] === res[1] && res[1] == res[2]) {
    return item[res[0]] * 10;
  }
  
  if((res[0] === res[1] && res[2] === 'Wild') || (res[1] === res[2] && res[0] === 'Wild')) {
    return item[res[1]] * 2;
  }
  if(res[0] === res[2] && res[1] === 'Wild') {
    return item[res[0]] * 2;
  }
  if(res[0] === res[1] || res[1] === res[2]) {
    return item[res[1]];
  }
  if(res[0] === res[2]) {
    return item[res[0]];
  }
  return 0
}