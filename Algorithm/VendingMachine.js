var Access = require('../Utility/utility');
var read = require('readline-sync');
var array =[1000,500,100,50,10,5,2,1];
var amount = read.questionInt("enter the amount");
Access.findNumberOfNotes(array,amount);