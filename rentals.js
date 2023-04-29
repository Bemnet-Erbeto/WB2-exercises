'use strict'
let numKids = 12;
let price;
price = numKids * 9.95;
if (numKids >= 6) {
    price = price * .9;
}
console.log(price);

let amount = 12.50;
let tax = amount * .08;
let taxExempt = false;

if (taxExempt === true) {
    tax = 0;
}
console.log(tax);
