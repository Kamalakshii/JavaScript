var Access = require('../Utility/utility');
var read = require('readline-sync');
var size =read.question("Enter the array size");
var arr=[];
for(let i=0;i<size;i++)
{
    arr[i]=read.question("enter the array elements");
    
}

var x = Access.mergeSort(arr);
console.log(x);
