/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var startTime = readline.question("Enter the start time");
var stopTime = readline.question("Enter the stop time ");
Access.getCurrentSecond();
Access.stopWatch();