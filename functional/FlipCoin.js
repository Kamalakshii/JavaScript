var Access = require('../Utility/utility');
var read = require('readline-sync');
var number = read.question("enter the number of times the coin should be flipped");
Access.flipCoin(number);