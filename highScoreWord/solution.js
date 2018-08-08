'use strict';

function high(x){
  let arr = x.split(" ");
  let newArr = arr
    .map(x => x.split("")
      .reduce((acc, curr) => acc + (curr.charCodeAt(0)-96), 0));
  return arr[newArr.indexOf(Math.max(...newArr))];
}