'use strict'

// How long will it take a savings account worth x to double in value given an interest rate of IR?
// (72/10)= 7.2 years double
let money = 300
let double = money * 2
let IR = 12.53
let ruleOf72 = 72 / (IR)
ruleOf72 = ruleOf72.toFixed(2)
let message = 'At a ' + IR + '% interest rate, your savings account will be worth $' + double + ' in ' + ruleOf72 + ' years'
console.log(message)

//output: "At a some-number% interest rate, your savings account will be wort some-number in some number years "


