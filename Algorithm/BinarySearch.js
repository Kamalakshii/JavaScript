var Access = require('../Utility/utility');
var read = require('readline-sync');
var size =read.question("Enter the array size");
var array=[];
for(let i=0;i<size;i++)
{
    array[i] = read.question("enter the array elements");
}
var element = read.question("enter the element to be searched");
var x = Access.binarySearch(array,element);
console.log(x);