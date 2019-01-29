var Access = require('../Utility/utility');
var read = require('readline-sync')
var row = read.question("enter the rows");
var col =read.question("enter the columns");
Access.array2D(row,col,read);