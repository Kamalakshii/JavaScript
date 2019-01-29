/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var stake = read.question("enter the stake amount");
var goal = read.question("enter the goal amount");
Access.gamblerBrokeOrWon(stake,goal);