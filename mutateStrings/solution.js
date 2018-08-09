'use strict';

function mutateMyStrings(stringOne, stringTwo){
  let solution = [stringOne], s1 = stringOne.split(''), s2 = stringTwo.split('');

  s1.forEach((char, index) => {if (char !== s2[index]) {
    s1[index] = s2[index]; 
    solution.push(s1.join(''));
  }});
  return solution.join('\n') + '\n';
}