/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var number = read.question("Enter the Number");
Access.harmonicNumber(number);