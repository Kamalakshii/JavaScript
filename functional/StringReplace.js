/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var username = read.question("Enter your name : ");
Access.StringReplace(username);