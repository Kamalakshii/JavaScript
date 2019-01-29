/** 
 * For accessing data from utility file
 */
 Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var number = read.question("Enter the number");
Access.findFactor(number);