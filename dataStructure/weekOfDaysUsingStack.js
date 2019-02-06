/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To print the calendar using linked list
     
 *  @file           : weekOfDaysUsingStack.js
 *  @overview       :Create the Week Object having a list of WeekDay objects each storing
                        the day (i.e  S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay objects
                     are stored in a stack implemented using Linked List
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 05/02/2019
 ******************************************************************************/
/** 
 * To access data from utility file and utilityDataStructure
 */
var D = require('../Utility/utilityDataStructure')
var M = require('../Utility/utility');
var T = require('util')
var read = require('readline-sync')
/** 
 *calendar() function to print the calendar
 */
function calendar() {
    try {
        /** 
         * create stacklinkedlist object
         */
        var weekdays = new D.StackLinkedList
        var stack1 = new D.StackLinkedList
        var dateq = new D.StackLinkedList
        var stack2 = new D.StackLinkedList
        /** 
         * ask the user to input month and year
         */
        var month = read.questionInt("enter the month :")
        var year = read.questionInt("enter the year :")
        /** 
         * invoking day() function to calculate the day of month and year
         */
        var d = D.day(month, 1, year)
        console.log(d)

        var res = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "sat"];
        if (d <= res.length) {
            console.log("The day falls on :" + res[d])
        }
        /** 
         * invoking monthof() to find the days of the month and store it in days
         */
        var days = D.monthof(month)
        /** 
         * invoking monthof() to find the month of the year
         */
        var t1 = D.monthof(year)
        if (t1) {
            if (month == 2) {
                days = 29;
            }
        }
        /**
         * Loop to push the weekdays into stack.
         */
        for (let i = 0; i < res.length; i++) {
            weekdays.push(res[i])
        }
        /**
         * Loop to push the dates into stack.
         */
        for (let i = 1; i <= days; i++) {
            dateq.push(i)
        }
        /**
         * Loop the week days and push it to stack.
         */
        for (let i = 0; i < res.length; i++) {
            stack1.push(weekdays.pop())
        }
        /**
         * Loop the number of days and push it to another stack.
         */
        for (let i = 1; i <= days; i++) {

            stack2.push(dateq.pop())
        }
        /**
         * To print weekdays with proper spacing
         */
        for (let i = 0; i < res.length; i++) {
            T.print(stack1.pop() + "  ")
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            T.print(" ")
        }
        /**
         * To print days with proper spacing
         */
        for (let i = 1; i <= days; i++) {

            if (i < 10) {
                T.print(" " + stack2.pop() + "   ")
            }
            if (i > 9) {
                T.print("" + stack2.pop() + "   ")
            }
            if ((d + i) % 7 == 0) {
                console.log();
            }
        }
    }
    catch (err) {
        console.log(err.message);
    }
} calendar();