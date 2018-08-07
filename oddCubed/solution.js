'use strict';

function cubeOdd(arr) {
  if (!arr.every(x => typeof x === "number")){
    return undefined;
  } else { 
      return arr.map(x => Math.pow(x, 3)).reduce((acc, curr) => {
      return curr % 2 !==0 ? acc + curr : acc;
    } , 0);
  }
}