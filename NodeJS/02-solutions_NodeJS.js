// Solutions to exercises_NodeJS.md
// Questions as selected by faculty were solved

//Q1 refer to folder Question1 in the same directory

//Q2 refer to Q2_NodeJS.js in this folder

//Q5 refer to Question5 in this folder | implemented with minor changes.

//Q6 and Q7 (Q7 : npm i chalk, used chalk in console.log() in usage.js below)
//Two files were created. maths.js and usage.js. Both have to be kept in same dirctory. Code of both below :
//maths.js
const sq_area = a => a*a;
const rect_area = (a,b) => a*b;
const PI = 3.14;
const circle_area = r => PI*r*r;

module.exports = {
    rect_area, circle_area
};

//usage.js
const maths = require('./maths.js');
const chalk = require('chalk')

console.log(chalk.blue(maths.circle_area(3)));
console.log(chalk.red(maths.rect_area(3,4)));
