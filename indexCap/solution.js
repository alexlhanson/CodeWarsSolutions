'use strict';

function capitalize(s,arr){
  let strArr = s.split('');
  arr.forEach( x => {if (!(x > strArr.length)) 
    strArr[x] = strArr[x].toUpperCase()});
  return strArr.join('');
};