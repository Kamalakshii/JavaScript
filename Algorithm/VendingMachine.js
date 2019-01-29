/** 
 * To access the data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * initialize an array
 */
var array =[1000,500,100,50,10,5,2,1];
/*
*take the user input
*/
var amount = read.questionInt("enter the amount");
Access.findNumberOfNotes(array,amount);