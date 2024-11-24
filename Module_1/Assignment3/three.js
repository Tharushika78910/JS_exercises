'use strict';

const num1Str = prompt('Enter number 1:');
const num2Str = prompt('Enter number 2:');
const num3Str = prompt('Enter number 2:');

const num1 = parseInt(num1Str);
const num2 = parseInt(num2Str);
const num3 = parseInt(num3Str);

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let avg = sum/3;

document.querySelector('#target').innerHTML= `<p>Sum: ${sum}</p>
  <p>Product: ${product}</p>
  <p>Average: ${avg}</p>`;