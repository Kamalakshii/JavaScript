/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var number = read.question("enter the number of times the coin should be flipped");
Access.flipCoin(number);