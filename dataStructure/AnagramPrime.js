var access = require('../Utility/utilityDataStructure');
var M = require('../Utility/utility')
var readline = require('readline-sync');
var arr = [];
var stack = new access.StackLinkedList
for (let i = 1000; i >= 0; i--) {
    if (M.isPrime(i))
        arr.push(i)
        console.log(arr+"jfhk");
}console.log(arr+"jfhk");
/**
 * Loop the array to find it is anagram or not.
 */
for (let i = 0; i < arr.length; i++) {
    console.log("hi");
    for (let j = i + 1; j < arr.length; j++) {
        if (M.isAnagram(arr[i], arr[j])) {
            stack.push(Number(arr[i]))
            stack.push(Number(arr[j]))
        }
    }
}
var result = stack.print()
console.log(("Anagrams in reverse order :"));
console.log(result + "\n");



