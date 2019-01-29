/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var size = read.question("enter the size of an array");
Access.triplet(size);