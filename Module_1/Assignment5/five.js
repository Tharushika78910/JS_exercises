'use strict';

const yearStr = prompt('Enter a year :');

const year = parseInt(yearStr);

if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
  document.querySelector('#output').innerHTML='The year '+year+' is a leap year.';
}
else if(year % 4 === 0 && year % 100 === 0 && !(year % 400 === 0)){
  document.querySelector('#output').innerHTML='The year '+year+' is not a leap year.';
}
else if(year % 4 === 0 && !(year % 100 === 0) && !(year % 400 === 0)){
  document.querySelector('#output').innerHTML='The year '+year+' is a leap year.';
}
else{
  document.querySelector('#output').innerHTML='The year '+year+' is not a leap year.';
}
