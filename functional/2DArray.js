/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync')
/** 
 * Accepting the user input
 */

var row = read.question("enter the rows");
var col =read.question("enter the columns");
Access.array2D(row,col,read);