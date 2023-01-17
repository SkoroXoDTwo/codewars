/*
https://www.codewars.com/kata/59325dc15dbb44b2440000af/solutions/javascript

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

function correctPolishLetters (string) {
  const polishLang  = "ąćęłńóśźż"
  const englishLang = "acelnoszz"
  
  return string.split('').map((char) => {
    if(polishLang.includes(char)) return englishLang[polishLang.indexOf(char)];
    return char;
  }).join('');
}