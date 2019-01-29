var Access = require('../Utility/utility');
var read = require('readline-sync');
var startTime = readline.question("Enter the start time");
var stopTime = readline.question("Enter the stop time ");
Access.getCurrentSecond();
Access.stopWatch();