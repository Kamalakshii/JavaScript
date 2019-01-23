var Access = require('../Utility/utility');
var read = require('readline-sync');
var username = read.question("Enter your name : ");
Access.StringReplace(username);