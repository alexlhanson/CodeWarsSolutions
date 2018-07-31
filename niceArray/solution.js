'use strict';

function isNice(arr){

  return arr.length === 0 ? false : arr.every(x => arr.includes(x + 1) | arr.includes(x - 1));
  
};