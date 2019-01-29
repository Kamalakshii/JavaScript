/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var a = read.question("Enter the value of a");
var b = read.question("enter the vae of b");
var c = read.question("Enter the value of c");
Access.quadraticRoots(a,b,c);