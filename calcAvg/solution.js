'use strict';

function find_average(array) {
  return array.reduce((accu, curr) => accu + curr)/array.length;
};