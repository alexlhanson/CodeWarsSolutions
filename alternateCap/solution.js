'use strict';
function capitalize(s){
  let arr1 = s.split('').map((x , index) => index % 2 ===0 ? x.toUpperCase() : x);
  let arr2 = s.split('').map((x, index) => index % 2 ===1 ? x.toUpperCase() : x);

  return [
  arr1.reduce((finalStr, x) => finalStr + x),
  arr2.reduce((finalStr, x) => finalStr + x)];
};