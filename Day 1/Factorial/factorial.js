/*
 * This function calculates the factorial of an number and returns it.
 * In case of invalid input, it returns the appropiate error message.
 */
 'use strict';

function factorial(n){
	if (isNaN(Number(n)))
		return "Please enter a number.";
	else if (n<0)
		return "Please enter a positive integer.";
	else if ((Number(n) - parseInt(n)) !== 0)
		return "Please enter an integer.";
    else if (n === 1 || n === 0)
        return 1;
    else
        return n*factorial(n-1);
}

//Invoking the function with various paramters to cover all the corner cases.

console.log(factorial(0));
console.log(factorial());
console.log(factorial(-7.5));
console.log(factorial(13));
console.log(factorial(13.5));
console.log(factorial("Arupam"));
