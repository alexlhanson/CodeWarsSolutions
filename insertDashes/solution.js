'use strict';

function insertDash(num) {
  num = ('' + num).split('');
  let finalStr = ''
  for (i = 0; i < num.length; i++){
    finalStr += num[i];
    if (num[i] % 2 === 1 && num[i + 1] % 2 === 1){
      finalStr += '-';
    }
  }
  return finalStr;
}