
/** 
 * Access data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/*
take the user input
*/
var size = read.question("Enter the size of an array");   
Access.bubbleSort(size);