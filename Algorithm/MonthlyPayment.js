/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
var principal =process.argv[2];
/** *
 * accept command line arguments
 */
var year =process.argv[3];
var rate = process.argv[4];

Access.monthlyPayment(principal,year,rate);
