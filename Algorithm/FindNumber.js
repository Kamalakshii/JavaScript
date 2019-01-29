/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var low = read.questionInt("enter the starting number");
var high = read.questionInt("enter last number");
 var c = Access.findNumber(low,high,read);
console.log("the number is :"+c);


