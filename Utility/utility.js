/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 * 
 *  @description
 * 
 *  @file           : utility.js
 *  @overview       : All the business logic are coded here.
 *  @module         : read-line modules are installed
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
const readline = require('readline-sync');
module.exports =
    {

        /********************************* String Replace ********************************/
        /* 1. String Replace
                *-------------------
                * Purpose   : To ensure username with minimum 3 characters and not a number,replacing USERNAME with userinput
                *             and print the string.
                *
                *  @descriptipn: Declaring the function and passing the user input as argument.
                *  @function: display name takes the user input and print it with some sentence.
         */




        StringReplace(username) {
            try {
                /*
                  Initializing variables
               */
                var input = "Hello <<username>> ,How are u?";
                var output = input.replace(/<<username>>/g, username);
                console.log("The Replaced string is :" + output);
            }
            /**Handles Exception
             */
            catch (exception) {
                /** 
                 * Display an error message
                 */
                console.log(err);
            }
        },






        /*****************************************FlipCoin****************************************/

        /**
         *  Purpose : To flip the coin and find the percentage of head and tail
         *
         * @description : declaring the function and passing user input as arguments
         * @function : using random() to get value between 0-1, if value<0.5 then it is tail otherwise heads and  find percentage of head and tail
         */
        flipCoin(number) {
            try {
                var heads = 0;
                var tails = 0;


                /*
                check whether the given number is valid
                */


                if (number > 0 && !isNaN(number)) {
                    for (var i = 0; i <= number; i++) {

                        /** 
                        generating random number and if its value is less than 0.5 its is tail otherwise head
                        */

                        var count = Math.random();

                        /**
                         * check the value of count is less than 0.5 if true increment tails
                         */
                        if (count < 0.5) {
                            tails++;
                        }

                        /** 
                         * Otherwise increment heads
                         */
                        else {
                            heads++;
                        }
                    }


                    /**
                     *  calculate the percentage of tail and store it in tailPercent variable 
                     */
                    var tailPercent = (tails / number) * 100;

                    /** 
                     * Display the tail percent
                     */
                    console.log("Percentage of Tail is : " + tailPercent + " %");

                    /** 
                     * calculate the percentage of head and store it in headPercent variable
                     */

                    var headPercent = (heads / number) * 100;

                    /** 
                     * Display the head percent
                     */
                    console.log("Percentage of Head is : " + headPercent + " %");

                }

                /**
                 * ask the user to enter valid number
                 */
                else {
                    console.log("Enter a valid number");
                }
            }

            /** 
             * Display an error message
             */
            catch (exception) {
                console.log(err);
            }

        },



        /***************************************LeapYear******************************* */
        /**
         **3. Leap year
         *--------------
        * @purpose : Accept four digit input of year from the user and check given inputs is Leap year or not
        *
        * @description : Declaring a function and passing the four digit number from  user input.
        *                
        * @function: function checks length of the given number, if length equals to 4, then it prints
        *given number is Leap year or not.
        */

        determineLeapYear(year) {
            try {
                /** 
                condtion to  check the given year is four digit and leap year
                */


                if (year.length > 4 && !isNaN(year)) {
                    if (year % 4 == 0 || year % 100 == 0 || year % 400) {
                        /** 
                         * Display a message as it is leap year
                         */
                        console.log("It is leap year");
                    }
                    else {
                        /**
                         * Display a message as it is not a leap year
                        */
                        console.log("It is not a leap year");
                    }
                }
                else {
                    /** 
                     * ask yhe user to enter valid input
                     */
                    console.log("Enter valid Number");
                }
            }

            /** 
             * Handles an exception
             */
            catch (exception) {

                /**
                 *  Display an error message
                 */
                console.log(err.message);
            }
        },



        /*************************************Power of 2*************************** */
        /* 4. Power of Two
        *------------------
        * @purpose : To Accept value of "N" from user and prints a table of the powers of 2 
        *that are less than or equal to 2^N. value of N should be less then 31.
        *
        * @description : Prints the value of two's power
        *                
        * @function: function checks the given number is less then 31, if less then 31, then it prints
        the value of two's power i.e., 2^N value.
        */
        powerOfTwo(number) {
            try {
                /** 
                 * accepting commandline arguments
                 */

                var pow = process.argv[2];

                /** 
                  this condition is to check the value of power should be 0-31
                 */
                if (pow >= 0 && pow <= 31 && !isNaN(pow)) {
                    /** 
                      if value of power is equal to 0 then 1 will be the result
                    */
                    if (pow == 0) {
                        console.log(1);
                    }

                    /** 
                     finding the power using Math.pow() function
                     */
                    for (var i = 1; i <= pow; i++) {
                        console.log(Math.pow(2, i));
                    }
                }
            }

            catch (exception) {
                console.log(err.message());
            }
        },



        /**********************************Harmonic Number********************************************* */
        /**
         * Purpose : Print the Nth Harmonic Value.
         *  
         * @Description : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
         * 
         * @Function : use for loop and display the harmonic number of the input
         */
        harmonicNumber(number) {
            try {

                /** 
                 * condition to check if number is greater than 0 and is a number
                 */
                if (number > 0 && !isNaN(number)) {

                    /**  
                    *Initialise sum
                    */
                    var sum = 0;

                    /** 
                     * for loop to compute the nth harmonic number 
                     */
                    for (var i = 1; i <= number; i++) {
                        sum = sum + (1 / i);

                    }
                    console.log(sum);
                }

                /** 
                 * tell user to enter valid number
                 */
                else {
                    console.log("Please enter a number and it should be greater than zero");
                }
            }

            /** 
             * otherwise display an error message
             */
            catch (exception) {
                console.log(err.message());
            }
        },

        /***********************************Factor******************************************** */

        findFactor(number) {

            try {

                for (var i = 2; i < number; i++) {
                    while (number % i == 0) {
                        console.log(i);
                        number = number / i
                    }

                }
                if (number > 2) {
                    console.log(number);
                }
            }
            catch (exception) {
                console.log(err.message);
            }



        },
        /*************************************Gambler************************************** */
        /** 
         * Purpose : Print Number of Wins and Percentage of Win and Loss
         * 
         * @Description : Desc -> Simulates a gambler who start with $stake and place fair $1 bets until
           he/she goes broke or reach $goal. Keeps track of the number of
           times he/she wins and the number of bets he/she makes. Run the experiment N
            times, averages the results, and prints them out.
         * 
         * @Function : using random(), if the value is greater then 0.5 win and stake increments, 
         * otherwise loss increases and stake decreases
         */

        gamblerBrokeOrWon(stake, goal) {

            try {
                /** 
                 * Initialize win, loss,times 
                 */
                var win = 0;
                var loss = 0;
                var times = 0;

                /** 
                 * condition to check if satke is greater than 0 and less than goal,
                 * and both stake and goal are numbers
                 */
                if (stake > 0 && stake < goal && !isNaN(stake, goal)) {

                    /**
                     *  check if stake is less than goal and greater than 0
                     */
                    while (stake > 0 && stake < goal) {
                        /** 
                         * invoke Math.random() and check if it is greater than 0.5
                         */
                        if (Math.random() > 0.5) {
                            /** 
                             * increment win and stake
                             */
                            win++;
                            stake++;
                        }

                        else {
                            /** 
                             * increment loss and decrement stake
                             */
                            loss++;
                            stake--;
                        }

                        /** 
                         * increment times
                         */
                        times++;
                    }

                    /** 
                     * Display number of times the gambler bet
                     */
                    console.log("number of bets= :" + times);

                    /** 
                     * Display number of times gambler won
                     */
                    console.log("Gambler won " + win);
                    /** 
                     * Display number of times gambler lost
                     */
                    console.log("gambler lost" + loss);
                }
                /** 
                 * calculate percentage of win and store it in winPercent
                 */
                var winPercent = ((win / times) * 100);
                /** 
                 * calculate percentage of loss and store it in lossPercent
                 */
                var lossPercent = ((loss / times) * 100);
                /** 
                 * Display winPercent
                 */
                console.log("the win percentage is : " + winPercent);
                /** 
                 * Display lossPercent
                 */
                console.log("loss percentage is : " + lossPercent);
            }
            /** Handles exception
             */
            catch (exception) {
                /** 
                 * Display an error message
                 */
                console.log(err);
            }


        },
        /**********************************Coupon Numbers************************************* */
        /** 
         * 8. Coupon Number
        * @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
        *  need to generate distinct coupon number? This program simulates this random process.
        *
        *
        * @description : Total random number needed to have all distinct numbers.
        *                
        *
        
        */
        couponNumberGenerate(number) {
            try {

                /**
                 * Array and count initialization 
                */
                var arr = [];
                var count = 0;

                /** 
                 * condition to check if count is not equal to number
                */
                while (count != number) {

                    /** 
                     * the input variable stores the random number multiplied by the input number
                     */
                    var input = (Math.round(Math.random() * number));
                    console.log(input);

                    /** 
                     * to check whether a random number is a new one if new push into array 
                     * and increment count
                     */
                    if (!arr.includes(input)) {
                        arr.push(input);
                        count++;
                    }
                }
                console.log(arr);
            }

            /** 
             * Handling the Exception
             */
            catch (exception) {
                console.log(err);
            }
        },

        /** ********************************** Calculate Distance************************************/
        /** 
         * 
         * 
         * 
         */
        calculateDistance() {
            try {

                /** 
                Accepting two command-line arguments
                */
                var x = process.argv[3];
                var y = process.argv[3];

                /** 
                 * Calculating the distance using Math.sqrt(x*x+y*y)
                 */
                var distance = Math.sqrt(x * x + y * y);
                console.log(distance);
            }
            catch (Exception) {
                console.log(err.message);
            }
        },


        /************************************WindChill****************************************** */
        /**
         * 
         */
        windChill() {

            /** 
             * Accepting command line arguments t and v
             */
            var t = process.argv[2];
            var v = process.argv[3];


            /** 
             * checks whether the absolute value of t is less than 50 and the value of v is in 3-120
             */
            if (Math.abs(t) < 50 && (v < 120 && v > 3)) {

                /** 
                 * w stores the value of effective temperature
                 */
                var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
                console.log("Temperature =:" + t);
                console.log("windSpeed= :" + v);
                console.log("Effective temperature=" + w);
            }

            /** 
             * otherwise display an error message
             */
            else {
                console.log("The temperature and windspeed are not accurate");
            }
        },
        /********************************Quadratic Equation************************************** */
        /**
         * Purpose :To find root of an equation a*x*x+b*x+c
         * 
         * @description :This equation has two roots and the roots can be found 
         * using the formula.Take a,b,c as inputs and find the roots of x
         */
        quadraticRoots(a, b, c) {

            var x = b * b - 4 * a * c;
            if (!isNaN(x)) {

                if (x == 0) {
                    root1 = root2 = -b / (2 * a);
                    console.log("Root1 = Root2 = :" + root1);
                }
                else if (x > 0) {
                    var root1 = (-b + (Math.sqrt(x))) / 2 * a;
                    var root2 = (-b - (Math.sqrt(x))) / 2 * a;
                    console.log("Root1 is : " + root1);
                    console.log("Root2 is : " + root2);

                }
                else {
                    var realPart = -b / (2 * a);
                    var imagPart = Math.sqrt(-x) / (2 * a);
                    console.log("Real Part is :" + realPart);
                    console.log("Imaginary part is :" + imagPart);

                }
            }
            else {
                console.log("The number is invalid");
            }
        },
        /********************************** StopWatch*******************************************/
        /** 
         * Purpose : To measure the time that lapses between start and end clicks 
         * 
         * @Description : return the time in seconds
         * 
         * @Function : function getCurrentSecond() returns the current second in seconds,
         * function stopwatch() ,the start variable stores the retrieved second at starttime,
         * and the stop variable stores the retrieved second at stop time
         */

        getCurrentSecond() {

            /** 
             * Create a date object
             */
            var dt = new Date();
            /** 
             * invoking getSeconds() on date object and storing it in seconds
             */
            seconds = dt.getSeconds();

            return seconds;
        },

        /** 
         * Function stopWatch
         */
        stopWatch() {
            /** 
             * invoke getCurrentSecond() to get current second and store in start variable
             */
            var start = this.getCurrentSecond();

            /**
             *  invoke getCurrentSecond() to get current second and store it in stopvariable
             */
            var stop = this.getCurrentSecond();

            /** 
             * To find elapsed time subtract stop from start
             */
            console.log("The elapsed time is : " + Number(stop - start));
        },
        /**********************************Triplet********************************************** */
        /** 
         * Purpose :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
         * @description : Read in N integers and counts the number of triples that sum to exactly 0
         * @function : The function returns a true if the array contains a triplets whose sum is zero or return false.
         */
        triplet(size) {


            try {
                if (size != 0) {
                    /** Initialise found
                     * Initialize count
                     * Initialize a
                     */

                    var found = false;
                    var count = 0;
                    var a = [];

                    /** 
                     * To read array elements
                     */
                    for (var i = 0; i < size; i++) {
                        a[i] = readline.question("enter the elements : ");
                    }

                    /**
                     *  To display array elements
                     */
                    console.log("The array elements are :" + a)

                    /**
                     * for loop to find the triplets whose sum is zero 
                     */
                    for (let i = 0; i < a.length - 2; i++) {
                        for (let j = i + 1; j < a.length - 1; j++) {

                            for (let k = j + 1; k < a.length; k++) {


                                /** 
                                 * condition to check their sum is zero ,if yes display those elements
                                 */
                                if (Number(a[i]) + Number(a[j]) + Number(a[k]) === 0) {

                                    console.log("The triplets whose sum is 0 are : " + a[i] + "," + a[j] + "," + a[k]);
                                    count++;
                                    found = true;
                                }

                            }
                        }
                    }


                    /**
                     *  condition to check if triplets are not found then display a message
                     */
                    if (found == false) {
                        console.log("There are no triplets whose sum is zero ");
                    }
                }
                else {
                    console.log("enter a valid input");
                }
            }


            /** 
             * Display an error message
             */
            catch (exception) {
                console.log(err);
            }



        },
        /*************************************2D Array******************************************/
        /** Purpose : Create 2 dimensional array in memory to read in M rows and N cols.
         *  @description : It takes M rows, N cols and M * N inputs for 2D array.
         *  @function : The function reads in a 2D array and prints it to the standard output.
         * 
         */
        array2D(row, col, read) {
            try {
                if (!isNaN(row, col, read)) {

                    /**
                     * Initialize arr
                     */
                    var arr = [];

                    /** 
                     * for loop to read m rows and n columns
                     */
                    for (let i = 0; i < row; i++) {
                        /** 
                         * Inserting into arr
                         */
                        arr.push([]);
                        for (var j = 0; j < col; j++) {
                            var element = readline.question("enter the value");
                            /** 
                             * Accepting the input and storing it in arr[][]
                             */

                            arr[i][j] = element;
                        }
                    }

                    /** 
                     * To display the array elements
                     */
                    console.log(arr);
                } else {
                    console.log("enter a valid input");
                }
            }

            /**
             * To display an error message
             */
            catch (Exception) {
                console.log(err);
            }
        },
        /************************************************************************************** */
        /*************                    ALGORITHM PROGRAMS                          ********* */
        /************************************************************************************** */


        /** 
         * Purpose : To check two strings are anagram or not
         * @description : Taking 2 Strings as input such as abcd and dcba and check for Anagrams.
         * @function : One string is an anagram of another if the second is simply a
            rearrangement of the first.
         */
        isAnagram(string1, string2) {
            try {
                if ((string1 && string2) != null) {

                    /** 
                        * Initialize s1,s2,arr1,arr2
                        */
                    var s1 = "";
                    var s2 = "";
                    var arr1 = [];

                    /** 
                     * split string1 and store result in arr1
                     */
                    arr1 = string1.split("");

                    /** 
                     * invoke sort() on arr1
                     */
                    arr1.sort();
                    var arr2 = [];

                    /** 
                     * split string2 and store result in arr2
                     */
                    arr2 = string2.split("");

                    /** 
                     * invoke sort() on  arr2
                     */
                    arr2.sort();


                    /** 
                     * condition to check if two strings are equal in length
                     */
                    if (string1.length == string2.length) {
                        for (let i = 0; i < string1.length; i++) {
                            s1 = s1 + arr1[i];
                            s2 = s2 + arr2[i];
                        }

                        /**
                         *   condition to check if both strings are equal and display message
                         */
                        if (s1 === s2) {
                           return true;
                        }
                        else {
             return false;

                        }
                    }
                    /** 
                     * if strings are not equal then display message
                     */
                    else {
                        console.log("String1 and String2 are not anagram");
                    }
                }
                /** 
                 * ask the user to enter valid input 
                 */
                else {
                    console.log("enter valid input");
                }
            }
            /** 
             * display an error message
             */
            catch (exception) {
                console.log(err);
            }
        },
        /**************************************Prime Number************************************ */
        /**
         *Purpose : To find Prime numbers ina goiven range.
         *@description : Prints prime number in a given range.
         *@function : The function finds the prime number using modulus and and count variable.
         */
        isPrime(number) {
            try {
                /**
                 *  condition to check if number is not null and is a number 
                 */
                if (number != null && isNaN) {

                    /**
                     *  Initialize count
                     */
                    var count = 0;

                    /**
                     *  for loop to find prime number in a given range
                     */
                    for (let i = 0; i <= number; i++) {
                        for (let j = 2; j < i; j++) {
                            /** 
                             * condition to check whether a number is prime,if modulus of i,j is 0then count=0.
                             */
                            if (i % j == 0) {
                                count = 0;
                                break;
                            }
                            else {
                                count = 1;
                            }
                        }
                        if (count == 1) {
                            console.log(i);
                        }
                    }
                }
                /** 
                 * ask the user to enter valid input
                 */
                else {
                    console.log("enter a valid number");
                }
            }
            /** 
             * display an error message
             */
            catch (exception) {
                console.log(err);
            }
        },



        /**************************************BubbleSort*************************************** */
        /** 
         * Purpose : To sort a given array elements.
         * @description :  The bubblesort is comparison-based algorithm in which each 
         * pair of adjacent elements is compared and the elements are swapped if they are not 
         * in order.
         * @function : The function repeatedly compares pairs of adjacent elements and then 
         * swapping their positions if they exist in the wrong order. 
         */
        bubbleSort(size) {
            try {
                if (isNaN(size && arr)) {
                    /** 
                     * Initialize arr
                     * 
                     */
                    var arr = [];
                    for (let i = 0; i < size; i++) {
                        arr[i] = readline.question("enter the array elements");
                    }

                    /** 
                     *  To display array elements
                     */
                    console.log("The array elements are : " + arr);

                    /** 
                     * find length of arr and store the result in n
                     */
                    var n = arr.length;

                    for (let i = 0; i < n; i++) {
                        for (j = i + 1; j < n; j++) {
                            /** 
                             * condition to compare the adjacent elements
                             */
                            if (Number(arr[i]) > Number(arr[j])) {
                                /**
                                 *  swapping their positions
                                 */
                                var temp = arr[i];
                                arr[i] = arr[j];
                                arr[j] = temp;
                            }
                        }
                    }
                    /** 
                     * To display the array elements
                     */
                    console.log("the sorted elements are : " + arr);


                }
                /**
                 * ask the user to enter valid input
                 */
                else {
                    console.log("enter valid input");
                }
            }
            /**
             * to display an error message
             */
            catch (exception) {
                console.log(err);
            }

        },

        /**********************************Insertion Sort*************************************** */
        /** Purpose : To sort the given array using insertion sort.
         * @description : Insertion sort is based on the idea that one element from the 
             input elements is consumed in each iteration to find its correct position i.e, 
             the position to which it belongs in a sorted array.
         * @function : It iterates the input elements by growing the sorted array at each
          iteration. It compares the current element with the largest value in the sorted array.
           If the current element is greater, then it leaves the element in its place and moves
            on to the next element else it finds its correct position in the sorted array and
             moves it to that position. 
         */
        insertionSort(size) {

            try {
                /** 
                 * Initialize arr
                 */

                var arr = [];

                /** 
                 *for loop to read the array elements and store the result in arr
                 */
                for (let i = 0; i < size; i++) {
                    arr[i] = readline.question("enter the array elements : ");
                }

                /** 
                 * To display array elements
                 */


                var ch;
                /** 
                 * for loop to loop until array  length and compares the current element with largest value
                 
                 */
                for (let i = 1; i < arr.length; i++) {
                    ch = arr[i];
                    var j = i - 1;
                    /** 
                     * if the current element is greater then leave the element and move to next element
                     */
                    while (j >= 0 && arr[j] > ch) {
                        console.log(arr);
                        arr[j + 1] = arr[j];
                        j = j - 1;
                    }

                    arr[j + 1] = ch;

                }
                /** 
                 * To display the sorted array
                 */
                console.log(arr);
            }
            /** 
             * Display an error message
             */
            catch (exception) {
                console.log(err);
            }
        },





        /*************************************Temperature Conversion***************************** */
        /** Purpose : To convert the temperature from celcius to fahrenheit and vice-versa.
         *@description : The user should input the choice 1 or choice 2 in order to convert 
          to celcius or fahrenheit.
         * @function : the function uses the formula celcius =(temperature -32)*(5/9) and
                    fahrenheit = temperature * (9/5)+32 respectively.
        */
        convertTemperature() {
            try {
                /** 
                 * Initialize temperature and ask athe user to input choice
                 */
                var temperature;
                var choice = readline.question("Press 1 to convert from fahrenheit to celcius" + "," + "Press 2 to convert from celcius to fahrenheit");

                /** 
                 * condition to check if user enters choice1
                 */
                if (choice == 1) {

                    /** 
                     * Ask the user to input temperature in fahrenheit
                     */
                    temperature = readline.question("enter the temperature in fahrenheit :");
                    var celsius = (temperature - 32) * (5 / 9);
                    /** 
                     * display the temperature in celcius
                     */
                    console.log("The tempertaure in celcius is : " + celsius);


                }
                /**
                 * condition to check if user input choice2
                 */
                else if (choice == 2) {

                    /** 
                     * Ask the user to input the temperature in celcius
                     */
                    temperature = readline.question("enter the temperature in celcius :");


                    var fahrenheit = temperature * (9 / 5) + 32;

                    /**
                     * display temperature in  fahrenheit
                     */
                    console.log("The temperature in fahrenheit is : " + fahrenheit);


                }
                /**
                 * Ask the user to input correct choice
                 */
                else {
                    console.log("please enter the correct choice");
                }
            }
            /**
             *  display an error message
             */
            catch (exception) {
                console.log(err);
            }

        },
        /***********************************Monthly Payment************************************* */
        monthlyPayment(principal, year, rate) {


            var n = 12 * year;
            var r = rate / (12 * 100);
            var payment = (principal * r) / (1 - Math.pow((1 + r), -n));
            console.log("Every monthly EMI : " + payment);


        },
        /********************************BubbleSort(String)*********************************** */

        /*
         * Purpose : To sort a given string array elements.
         * @description :  The bubblesort is comparison-based algorithm in which each 
         * pair of adjacent string elements is compared and the elements are swapped if they are not 
         * in order.
         * @function : The function repeatedly compares pairs of adjacent string elements and then 
         * swapping their positions if they exist in the wrong order. 
         */
        bubbleSortForString(size) {
            try {
                if (isNaN(size && arr)) {
                    /** 
                     * Initialize arr
                     * 
                     */
                    var arr = [];
                    for (let i = 0; i < size; i++) {
                        arr[i] = readline.question("enter the array elements");
                    }

                    /** 
                     *  To display array elements
                     */
                    console.log("The array elements are : " + arr);

                    /** 
                     * find length of arr and store the result in n
                     */
                    var n = arr.length;

                    for (let i = 0; i < n; i++) {
                        for (j = i + 1; j < n; j++) {
                            /** 
                             * condition to caompare4 the adjacent elements
                             */
                            if ((arr[i]) > (arr[j])) {
                                /**
                                 *  swapping their positions
                                 */
                                var temp = arr[i];
                                arr[i] = arr[j];
                                arr[j] = temp;
                            }
                        }
                    }
                    /** 
                     * To display the array elements
                     */
                    console.log("the sorted elements are : " + arr);


                }
                /**
                 * ask the user to enter valid input
                 */
                else {
                    console.log("enter valid input");
                }
            }
            /**
             * to display an error message
             */
            catch (exception) {
                console.log(err);
            }

        },
        /************************************Find Number**************************************** */
        /** Purpose : To find a number between a given values
         * @description :It takes a command-line argument N, asks you to think of a number
            between low and high,  and always guesses the answer with n questions.
         * @function : The function recursively ask true/false if the number is between
            a high and low value and prints the intermediary number and final
         */
        findNumber(low, high, read) {
            var mid = low + Math.floor((high - low) / 2);
            console.log(mid);
            if (low < high) {
                if (low == high - 1) {
                    var c;
                    c = readline.question("Is the number " + low + " If yes Press 'Y' Otherwise Press 'N' ");
                    if (c == 'Y')

                        return low;

                    if (c == 'N') {
                        return high;
                    }
                }
                c = readline.question("Is the number " + mid + -+high + " If yes Press 'Y' Otherwise press 'N' ");
                if (c == 'Y') {
                    mid = this.findNumber(mid, high, read);
                }
                if (c == 'N') {
                    mid = this.findNumber(low, mid - 1, read);

                }

            } return mid;
        },
        /*******************************************isNumberPalindrome******************************* */
        /** 
         * 
         * 
         */
        /***********************************Day Of Week****************************************** */
        /** Purpose : To print the day of the week that date falls on.
         * @description :prints the day of the week that date falls on by taking three
           command-line arguments: m (month), d (day), and y (year).
         * @function : print 0 for Sunday, 1 for Monday, 2 for
            Tuesday, and so forth.
         */
        dayOfWeek(day, month, year) {
            if (isNaN(day, month, year) && (0 < day && day < 32) && (0 < month && month < 13) && (999 < year && year < 10000))
                /** 
                 * Using the formula find the day taht falls on the input day month and year
                 */
                var y0 = year - Math.floor((14 - month) / 12);
            var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
            m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
            var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
            return d0;

        },
        /****************************************BinarySearch********************************* */
        /**
         * Purpose : to search a given number in an array.
         * @description : Finds the position of a target value within a sorted array.
         * @function :  Searches a sorted array by repeatedly dividing the search interval in half.
         * Begin with an interval covering the whole array. If the value of the search key is less
         *  than the item in the middle of the interval, narrow the interval to the lower half. 
         * Otherwise narrow it to the upper half. Repeatedly check until the value is found or
         *  the interval is empty.
        */
        binarySearch(array, element) {
            try {


                array.sort(function (a, b) { return a - b; });
                console.log(array);
                var first = 0;
                var last = array.length - 1;
                while (first <= last) {
                    var mid = first + Math.floor((last - first) / 2);
                    if (element === Number(array[mid]))
                        return true;

                    else if (Number(array[mid]) > element)

                        last = mid - 1;


                    else

                        first = mid + 1;
                }
                return false;
            }

            catch (exception) {
                console.log(err);
            }
        },
        /**********************************Binary Search for String*************************** */
        /** 
         * Purpose : to search a given number in an array.
         * @description : Finds the position of a target value within a sorted array.
         * @function :  Searches a sorted array by repeatedly dividing the search interval in half.
            Begin with an interval covering the whole array. If the value of the search key is less
           than the item in the middle of the interval, narrow the interval to the lower half. 
           Otherwise narrow it to the upper half. Repeatedly check until the value is found or
           the interval is empty.
        */

        binarySearchForString(array, element) {
            try {
                /**
                 * sort the input array
                 */
                array.sort();

                /** 
                 * Initialize first
                 */
                var first = 0;

                /** 
                 * find the array length and store it in last
                 */
                var last = array.length - 1;

                /** 
                 * loop until first is less than or equal to last
                */
                while (first <= last) {
                    /** 
                     * calculate the value of mid
                     */

                    var mid = first + Math.floor((last - first) / 2);

                    /** 
                     * condition to check if element is present at middle itself
                     */
                    if (array[mid] == element) {
                        return true;
                    }
                    /** 
                     * condition to check if the element is in the right or left of the array
                     */
                    else if (element.localeCompare(array[mid]))

                        first = mid + 1;


                    else

                        last = mid - 1;

                }
                return false;
            }
            /** 
             * to display error message
             */
            catch (exception) {
                console.log(err);
            }
        },
        /***********************************Square Root*****************************************/
        /** 
         * Purpose : To compute the square root of a non-negative number
         * @description : The accuracy condition is checked using Math.abs(t - c/t) > epsilon*t .
         * @function : using the formula the root of a given number is found if the input is 
            non negative prints an error message
         */
        findSquareRoot(number) {
            try {
                /** 
                 * condition to check if it is a valid input
                 */
                if (isNaN(number)) {
                    /** 
                     * store the digits from 0 -9 in format
                    */
                    var format = /[0-9]/;
                    if (format.test(number)) {
                        var temp = number;
                        var epsilon = 1e-15;
                        /** 
                         * loop until the while condition fails
                         */
                        while (Math.abs(temp - number / temp) > epsilon * temp) {
                            /** 
                             * calculate root of a input and store it in temp
                             */
                            temp = (number / temp + temp) / 2;
                        }
                        /** 
                         * display the square root of an input
                         */
                        console.log("Square root of a number is :" + temp);

                    }

                }
                /**
                 * ask the user to give valid input
                 */
                else {
                    console.log("enter a positive input number");
                }
            }
            /** 
             * display an error message
            */
            catch (exception) {
                console.log(err.message);
            }
        },
        /*************************************MergeSort****************************************** */
        /**Purpose : To merge sort a list of strings
         * @description : MergeSort breaks down a list into several sub-lists until each sublist
           consists of a single element and merging those sublists in a manner that results into 
           sorted list.
         * @function : 
        */


        /*****************************Decimal to Binary**************************************** */
        /**
         * Purpose : To convert the given decimal number into binary.
         * @description : It outputs the binary (base 2) representation of
            the decimal number typed as the input.
         * @function : It is based on decomposing the number into a sum of powers of 2. 
         */
        convertToBinary(number) {
            try {
                if (isNaN(number)) {
                    /** 
                     * Initialize result , string 
                     */
                    var result = 0;
                    var string = "";

                    /** 
                     * loop till number becomes less than 0.9
                     */
                    while (number > 0.9) {
                        /** 
                         * find the number modulus 2 and store it in result
                         */
                        result = Math.floor(number % 2);

                        /**
                         * concat the result with string 
                         */
                        string = result + string;
                        number = number / 2;
                    }
                    /**
                     * To display the binary value of input
                     */
                    console.log("The binary value of number is : " + string);
                }
                /**
                 * ask the user to give valid input
                 */
                else {
                    console.log("enter valid input");
                }
            }
            /** 
             * to display an error message
             */
            catch (exception) {
                console.log(err.message);
            }
        },
        /********************************Binary Search the word from file***************** */
        /** 
         * Purpose : To read in a list of words from file.
         * @description : 
         * 
        */
        searchWord() {
            /**
             * Initialize array
            */
            arr = [];
            /** 
             * to accept input from user
             */
            var find = readline.question("enter the word to be searched :");
            /** 
             * to read the file
             */
            const fs = require('fs')

            /** 
             * if the word is found then returns the data otherwise an error
             */
            fs.readFile('sample.txt', (err, data) => {
                if (err) throw err;

                /**
                 * Split the string and store it in an array
                 */
                array = data.toString().split(" ");
                console.log(array);

                /** 
                 * search the word using binary serach
                 */
                console.log(this.binarySearchForString(array, find));
            })
        },
        /***********************************Vending Machine************************************ */
        /**
         *Purpose : to return the Change in rupees by the Vending Machine
         @description : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be
        returned by Vending Machine.It returns the minimum number
        of Notes as well as the Notes to be returned by the Vending Machine as a
        Change
        @function :Uses recursion and checks for largest value of the Note to return change
        to get to minimum number of notes.
         */
        findNumberOfNotes(array, amount) {
            try {
                /** 
                 * initialize notes
                 */
                var notes = 0;

                /** 
                 * loop till the length of array
                 */
                for (let i = 0; i < array.length; i++) {
                    if (amount / array[i] >= 1) {
                        /** 
                         * if the amount is equal to the array element then store it in c
                         */
                        var c = Math.floor(amount / array[i]);
                        notes = notes + c;
                        /** 
                         * minimum number of notes required 
                         */
                        console.log(array[i] + " notes are :" + c);
                        amount = amount % array[i];
                    }

                    console.log("Total number of notes = :" + notes);
                }
            }/**
     *display an error message
     */
            catch (exception) {
                console.log(err.message);
            }
        },
/**********************************IsAnagram2***************************** */
isNumberPalindrome(num1) {
    try {
        var str = "";
        num1 = num1 + "";
        for (let i = 0; i < num1.length; i++) {
            str = num1.charAt(i) + str;
        }
        if (str == num1) {
            return true;
        }
        return false;
    } catch (error) {

    }
},

isAnagramPalindrome() {
    try {
        console.log("Prime numbers in the range 0 to 1000 which are anagram");
        var arr = [];
        /**
         * If the number is Prime push it to array.
         */
        for (let i = 0; i < 1000; i++) {
            if (this.isPrime(i)) {
                arr.push(i);
            }
        }
        /**
         * Loop continuously from 1st element and second element.
         * Invoke isAnagram and isPalindrome and pass 2 elemets 
         * Print all the elements which are prime anagram,palindrome. 
         * 
         */

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (this.isAnagram(arr[i], arr[j])) {
                    console.log(arr[i] + "--" + arr[j] + " Is anagram");
                    if (this.isNumberPalindrome(arr[i])) {
                        console.log(arr[i] + " Is palindrome");
                    }
                    if (this.isNumberPalindrome(arr[j])) {
                        console.log(arr[j] + " Is palindrome");
                    }
                }
            }
        }


    } catch (error) {
        console.log(error.message);

    }
},
    }



