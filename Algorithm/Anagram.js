/** 
 * For accessing the data from utility file
*/
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */
var string1 = read.question("enter the first string");
var string2 = read.question("enter the second string");
var c = Access.isAnagram(string1,string2);
console.log(c);