var Access = require('../Utility/utility');
var read = require('readline-sync');
var principal =process.argv[2];
var year =process.argv[3];
var rate = process.argv[4];

Access.monthlyPayment(principal,year,rate);
