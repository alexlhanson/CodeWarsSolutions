'use strict';
function validatePIN (pin) {
  return (/^(\d{4}|\d{6})$/).test(pin)? true : false;
};