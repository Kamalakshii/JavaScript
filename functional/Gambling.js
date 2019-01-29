var Access = require('../Utility/utility');
var read = require('readline-sync');
var stake = read.question("enter the stake amount");
var goal = read.question("enter the goal amount");
Access.gamblerBrokeOrWon(stake,goal);