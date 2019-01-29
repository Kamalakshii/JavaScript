/** 
 * For accessing data from utility file
 */
var Access = require('../Utility/utility');
var read = require('readline-sync');
var day = Number(process.argv[2]);
    var month =Number(process.argv[3]);
    var year =Number(process.argv[4]);
var number = Access.dayOfWeek(day,month,year);
var res = ["Sunday" , "Monday" ,"Tuesday" , "Wednesday", "Thrusday", "Friday","Saturday"];
if(number <= res.length)
{
console.log("The day falls on :"+res[number]);
}
else
{
    console.log("invalid day");
}