var Access = require('../Utility/utility');
var read = require('readline-sync');
var low = read.questionInt("enter the starting number");
var high = read.questionInt("enter last number");
 var c = Access.findNumber(low,high,read);
console.log("the number is :"+c);


