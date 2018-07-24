'use strict';

function fixTheMeerkat(arr) {
  var newArr = []
  for (i = 0; i < arr.length; i++){
    newArr.push(arr[Math.abs((arr.length - 1) - i)]);
  }
  return newArr;
}