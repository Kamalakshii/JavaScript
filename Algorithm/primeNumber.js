/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :to find the prime numbers in a given range 
 *  @description    
 *  @file           :primeNumber.js
 *  @overview       :The function finds the prime number using modulus and and count variable.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
var access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */
var number = read.question("Enter the number");
/** 
 * invoking isPrime() to find the prime numbers in a given range 
 */
access.isPrime(number);
