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
               console.log("The Replaced string is :" +output);
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
         flipCoin(number) 
         {
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
            try 
            {
                /** 
                condtion to  check the given year is four digit and leap year
                */


                if (year.length > 4 && !isNaN(year)) {
                    if (year % 4 == 0 || year % 100 == 0 || year % 400) 
                    {
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
            try{
                /** 
                 * accepting commandline arguments
                 */

            var pow = process.argv[2];

            /** 
              this condition is to check the value of power should be 0-31
             */
            if(pow>=0 && pow<=31 && !isNaN(pow))
            {
                /** 
                  if value of poiwer is equal to 0 then 1 will be the result
                */
               if(pow==0)
                {
                    console.log(1);
                }

                /** 
                 finding the power using Math.pow() function
                 */
                for(var i=1;i<=pow;i++)
                {
                    console.log(Math.pow(2,i));
                }
            }
        }
        
        catch(exception)
        {
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
            try{
            
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
        catch(exception)
        {
            console.log(err.message());
        }
        },

/***********************************Factor******************************************** */

        findFactor(number) {
            
                try{

                for(var i=2;i<number;i++)
                {
                    while(number%i==0)
                    {
                        console.log(i);
                        number=number/i
                    }
                    
                } 
                if(number>2)
                {
                    console.log(number);
                }
            }
            catch(exception)
            {
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
        
            gamblerBrokeOrWon(stake,goal){
            
            try
            {
             /** 
              * Initialize win, loss,times 
              */   
                var win=0;
                var loss=0;
                var times=0;

                /** 
                 * condition to check if satke is greater than 0 and less than goal,
                 * and both stake and goal are numbers
                 */
                if(stake>0 && stake<goal && !isNaN(stake,goal))
             {

                /**
                 *  check if stake is less than goal and greater than 0
                 */
                while(stake>0 && stake<goal)
                {
                    /** 
                     * invoke Math.random() and check if it is greater than 0.5
                     */
                    if(Math.random()>0.5)
                    {
                        /** 
                         * increment win and stake
                         */
                        win++;
                        stake++;
                    }
                    
                    else
                    {
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
                console.log("number of bets= :"+times);
                
                /** 
                 * Display number of times gambler won
                 */
                 console.log("Gambler won "+win);
                 /** 
                  * Display number of times gambler lost
                  */
                console.log("gambler lost"+loss);
            }
            /** 
             * calculate percentage of win and store it in winPercent
             */
                var winPercent = ((win/times)*100);
                /** 
                 * calculate percentage of loss and store it in lossPercent
                 */
                var lossPercent = ((loss/times)*100);
                /** 
                 * Display winPercent
                 */
                console.log("the win percentage is : "+winPercent);
                /** 
                 * Display lossPercent
                 */
                console.log("loss percentage is : "+lossPercent);
        }  
        /** Handles exception
         */
            catch(exception)
            {
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
    couponNumberGenerate(number)
    {
        try{

        /**
         * Array and count initialization 
        */
        var arr = [];
        var count = 0;

        /** 
         * condition to check if count is not equal to number
        */
        while(count!=number)
        {
            
            /** 
             * the input variable stores the random number multiplied by the input number
             */
            var input = (Math.round(Math.random()*number));
            console.log(input);

            /** 
             * to check whether a random number is a new one if new push into array 
             * and increment count
             */
            if(!arr.includes(input))
            {
                arr.push(input);
                count++;
            }
        }
        console.log(arr);
        }   

    /** 
     * Handling the Exception
     */
    catch(exception)
    {
        console.log(err);
    }
},

/** ********************************** Calculate Distance************************************/
 /** 
  * 
  * 
  * 
  */   
    calculateDistance()
      {
        try{

        /** 
        Accepting two command-line arguments
        */
        var x = process.argv[3];
        var y = process.argv[3];

        /** 
         * Calculating the distance using Math.sqrt(x*x+y*y)
         */
        var distance = Math.sqrt(x*x+y*y);
          console.log(distance);
        }
        catch(Exception)
        {
            console.log(err.message);
        }
    },
       
    
/************************************WindChill****************************************** */
/**
 * 
 */    
windChill()
    {

        /** 
         * Accepting command line arguments t and v
         */
        var t = process.argv[2];
        var v = process.argv[3];
        
        
        /** 
         * checks whether the absolute value of t is less than 50 and the value of v is in 3-120
         */
        if(Math.abs(t)<50 && (v<120 && v>3))
        {

            /** 
             * w stores the value of effective temperature
             */
            var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            console.log("Temperature =:"+t);
            console.log("windSpeed= :"+v);
            console.log("Effective temperature="+w);
        }

        /** 
         * otherwise display an error message
         */
        else{
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
quadraticRoots(a,b,c)
    {
    
        var x = b * b - 4 * a * c;
        if(!isNaN(x))
        {
        
        if(x == 0)
        {
            root1=root2=-b/(2*a);
            console.log("Root1 = Root2 = :"+root1);
        }
        else if(x>0)
        {
            var root1 = (-b + (Math.sqrt(x))) / 2 * a;
            var root2 = (-b - (Math.sqrt(x))) / 2 * a;
            console.log("Root1 is : "+root1);
            console.log("Root2 is : "+root2);

        }
        else 
        {
            var realPart = -b/(2*a);
            var imagPart = Math.sqrt(-x)/(2*a);
            console.log("Real Part is :"+realPart);
            console.log("Imaginary part is :"+imagPart);

        }
    }
    else{
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

  getCurrentSecond()      
  {

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
  stopWatch()
  {
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
     console.log("The elapsed time is : "+Number(stop-start));
  }                        
}


    
     

    



    
