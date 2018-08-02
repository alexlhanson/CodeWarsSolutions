'use strict';

var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.slice(0).sort((a, b) => a - b)[1]);
};