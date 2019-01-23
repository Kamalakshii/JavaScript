/********************************* String Replace ********************************/
/* 1. String Replace
*-------------------
* Purpose   : To ensure username with minimum 3 characters and not a number,replacing USERNAME with userinput
*             and print the string.
*
*  @descriptipn: Declaring the function and passing the user input as argument.
*  @function: diplay name takes the user input and print it with some sentence.
*/
const readline = require('readline-sync');
module.exports = {
    StringReplace(username)
    {
        var input = "Hello <<username>> ,How are u?";
        var output = input.replace(/<<username>>/g,username);
        if(username.length>=3&&isNaN(username))
        {
            console.log(output);
        }
        else
        {
        console.log("enter minimum 3 characters");
        }
    }
}