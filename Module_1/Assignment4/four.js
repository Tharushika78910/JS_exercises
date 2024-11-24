'use strict';

const name = prompt('What is your name :');
const num = Math.floor(Math.random() * 4) + 1;

switch(num)
{
  case 1:
    document.querySelector('#output').innerHTML = name + ', you are Gryffindor';
    break;
  case 2:
    document.querySelector('#output').innerHTML = name + ', you are Slytherin';
    break;
  case 3:
    document.querySelector('#output').innerHTML = name + ', you are Hufflepuff';
    break;
  case 4:
    document.querySelector('#output').innerHTML = name + ', you are Ravenclaw';
    break;
  default:
    document.querySelector('#output').innerHTML = name + ', you are not belong to any house.';
}
