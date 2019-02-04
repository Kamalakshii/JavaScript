/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic of datastructures.
 * 
 *  @description
 * 
 *  @file           : utilityDataStructure.js
 *  @overview       : All the business logic are coded here.
 *  @module         : read-line modules are installed
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 01/02/2019
 ******************************************************************************/
var utility = require("../Utility/utility");

class Node {
    /**
     * class Node has two properties, data holds the data of a node while-
     * next holds the pointer to the next node, which is initialized to the null value.
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/************************************Linkedlist******************************************/
/*****************************************************************************************/
class LinkedList {
    /**
     * Linked List class has two properties, where head stores the first node of a List,
     * and size indicates the number of nodes in a list.
     */
    constructor() {
        this.head = null;
        this.size = null;
    }
    /**
     * to add data to the end of the list
     */
    add(data) {
        var node = new Node(data);
        /**
         * To store current data
         */
        var current = this.head;
        /**
         * if list is empty, add the data and make it head
         */
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            /**
             * Iterate to the end of the list
             */
            while (current.next) {
                current = current.next;
            }
            /**
             * Add the node
             */
            current.next = node;
        }
        this.size++;
    }
    /**
     * Searches for item in the list. It need the item and returns a boolean value.
     */
    search(data) {
        var temp = this.head;
        /**
         * Iterate to the end of the list
         */
        while (temp) {
            /**
             * Return true if the passed data is equal to the data, else return false
             */
            if (temp.data == data) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    /**
     * Removes data from the list. It need the data and modifies the list. 
     */
    removeItem(data) {
        var current = this.head;
        var prev = null;

        while (current != null) {
            /**
             * comparing data with current data. If found, then remove and return true .
             */
            if (current.data == data) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return true
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
    /**
     * prints the list items 
     */
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }
        return str;
    }
    /** 
     * inserts an element at a particular index
     */
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            var node = new Node(element);
            var curr, prev;
            curr = this.head;
            if (index == 0) {
                node.next = head;
                this.head = node;
            }
            else {
                curr = this.head;
                var it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    /** 
     * add an element at a particular position
     */
    addPos(arr, num) {
        console.log(num + " is being added ");
        /** 
         * loop until array length-1 and if it is greater than number return 0,otherwise return array length
         */
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[0] >= num)
                return 0;
            else if (arr[i] < num && arr[i + 1] > num) {
                return i + 1
            }
        }
        return arr.length
    }

}
/******************************************Stack**************************************** */
/*************************************************************************************** */
class Stack {
    /**
     * implementation of stack using array
     */
    constructor() {
        this.items = [];
        this.size = 0
        this.capacity
        this.top = -1
    }
    stack(capacity) {
        this.capacity = capacity
        var t = new items[capacity]
    }
    /** 
     * to add an element into the stack
     */
    push(data) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++
        this.items[++this.top] = data
    }
    /** 
     * to pop top element from the stack
     */
    pop() {
        if (this.top == -1)
            console.log("stack is empty")
        this.size--
        return this.items[this.top--]
    }
    /** 
     * to return top element from the stack
     */
    peak() {
        if (this.top == -1)
            console.log("stack is empty")
        else
            console.log(this.items[top])
    }
    /** 
     * to get the size of the stack
     */
    getSize() {
        return this.size;
    }
    /** 
     * to check if the stack is empty or not
     */
    isempty() {
        if (size == 0)
            return true
        else
            return false

    }
}
/***********************************Queue*********************************************** */
/*************************************************************************************** */
class Queue {
    constructor() {
        this.items = []
    }
    /** 
     *to add data into the queue
     */
    enqueue(data) {
        this.items.push(data);

    }
    /** 
     * to remove element from the queue
     */
    dequeue() {
        if (this.isEmpty()) {
            return "underflow";
        } return this.items.shift();
    }
    /**
     *returns true if the stack is empty
     */
    isEmpty() {
        return this.items.length == 0;
    }
    /** 
     * returns a string where all elements are concatenated
     */
    printList() {
        var str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        } return str;
    }
}
/*************************************deQueue****************************************** */
/*************************************************************************************** */
class deQueue {
    constructor() {
        this.items = []
    }
    /** 
     * to add an element at the front end
     */
    addFront(data) {
        this.items.unshift(data);
    }
    /** 
     * to add the element at the rear end
     */
    addRear(data) {
        this.items.push(data);
    }
    /** 
     * to remove element from the front end
     */
    removeFront() {
        if (this.isEmpty())
            return "underflow";
        return this.items.shift();
    }
    /** 
     * to remove element from the rear end
     */
    removeRear() {
        return this.items.pop();
    }
    /** 
     * returns true if the dequeue is empty
     */
    isEmpty() {
        return this.items.length == 0;
    }
}
/**********************************StackLinkedList************************************** */
/*************************************************************************************** */
class StackLinkedList {
    constructor() {
        this.size = 0
        this.head = null

    }
    /** 
     * push the element into the linked list
     */
    push(data) {
        /** 
         * create a anew node n
         */
        var n = new Node(data)
        if (this.head == null) {
            this.head = n
            this.size++
        }
        else {
            var temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = n
            this.size++
        }

    }
    /** 
     * pop the element from the stack
     */
    pop() {
        if (this.head == null) {
            console.log("Stack underflow");
            return null;
        }
        var curr = this.head;
        var pre = this.head;
        if (curr.next == null) {
            this.head = null;
            return curr.data;
        }
        while (curr.next) {
            pre = curr;
            curr = curr.next;
        }
        var data = curr.data
        pre.next = null;
        this.size--;
        return data
    }
    /** 
     * returns the size of the stack
     */
    getSize() {
        return this.size
    }
    print() {
        var st = ""
        var temp = this.head
        while (temp) {
            console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }

        return st
    }

}
/***************************************QueueLinked************************************* */
/**************************************************************************************** */
class QueueLinked {
    constructor() {
        this.size = 0
        this.head = null

    }
    /** 
     * adding an element into the queue
     */
    enqueue(data) {
        var n = new Node(data)
        if (this.head == null) {
            this.head = n
            this.size++
        }
        else {
            var temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = n
            this.size++
        }

    }
    /** 
     * removing an element from the queue
     */
    dequeue() {
        if (this.head == null) {
            console.log("Stack underflow");
            return null;
        }
        else {
            var temp = this.head
            var data = temp.data
            this.head = temp.next
            this.size--
            return data

        }
    }
    /** 
     * returns the size of the queue
     */
    getSize() {
        return this.size
    }
    print() {
        var st = ""
        var temp = this.head
        while (temp) {
            console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st
    }
}
module.exports = {
    LinkedList, Node, Stack, deQueue, QueueLinked, StackLinkedList,
/***********************************BinaryTree********************************************* */
/*************************************************************************************** */ 
binaryTree(number) {
        var fact = 1;
        for (let i = 1; i <= number; i++) {
            fact = fact * i;
        }
        return fact;
    },
/*****************************************day******************************************** */
/*************************************************************************************** */ 
day(m, d, y) {
    /**
     * to display the calendar
    */
        var v = Math.floor((14 - m) / 12)
        var y0 = y - v
        var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400)
        var m0 = m + 12 * Math.floor((14 - m) / 12) - 2
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7
        d0 = Math.floor(d0)
        return d0;

    },
/****************************************month******************************************* */
/************************************************************************************** */   
monthof(m) {
        switch (m) {
            case 1: return 31;
                break;
            case 2: return 28;
                break;
            case 3: return 31;
                break;
            case 4: return 30;
                break;
            case 5: return 31;
                break;
            case 6: return 30;
                break;
            case 7: return 31;
                break;
            case 8: return 31;
                break;
            case 9: return 30;
                break;
            case 10: return 31;
                break;
            case 11: return 30;
                break;
            case 12: return 31;
                break;

        }
    },
/***********************************LeapYear********************************************* */
/************************************************************************************* */    
leapYear(year) {
    /** 
     * condition to check if the given year is leap or not
     */
        if ((year % 4 == 0) && (year % 100 != 0)) return true;
        if (year % 400 == 0) return true;
        return false;
    },
/************************************anagramPrime************************************** */
 /************************************************************************************* */   
    anagramAndPrime() {
        /**
         * initialize arrays
        */
        var arr = [];
        var arr2 = [];
         var array = [["0-100 "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        /** 
         * loop until the range to get the prime numbers
         */
         for (let i = 2; i < 1000; i++) {
            if (isPrime(i)) {
                arr.push(i);
            }
        }
        var range = 100, k = 0; 
        /** 
         * loop until array length to find the prime numbers that are anagram
         */
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (access.isAnagram(arr[i], arr[j])) {
                    if (arr[i] <= range) {
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);

                            arr2.push(arr[i])
                            arr2.push(arr[j])
                            array[k].push(arr[j]);
                        }
                    } else {
                        range = range + 100;
                        k++;
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    }
                }
            }
        }
        console.log("The Number which are prime and anagram ");

        for (let i = 0; i < array.length; i++) {

            for (let j = 0; j < array[i].length; j++) {
                req.print(array[i][j]);
                if (j == 0) {
                    req.print(" => ");
                } else {
                    if (j != array[i].length - 1)
                        req.print(",")
                }
            }
            console.log();


        }
        return arr2
    },
/*****************************************isPrime************************************* */
/************************************************************************************* */ 
isPrime(first, last) {
    /** 
     * Initialize flag, k, prime 
     */
        var flag = 0;
        var k = 0;
        var prime = [];
    /** 
     * loop in the given range to find the prime number
     */
        for (let i = first; i <= last; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 0;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                prime[k++] = i;
            }
        }
        return prime;
    },
 }










