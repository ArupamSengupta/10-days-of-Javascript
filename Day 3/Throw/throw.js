/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 * If 'a' is a string or undefined , appropiate error messages would be shown.
 */
'use strict';
function isPositive(a) {
	
	if (a !== 0 && !a)
		throw new Error("No input given");
    else if (isNaN(Number(a)))
		throw new Error("Please enter a number.");
	else if(a>0)
        return "YES";
    else if (a === 0)
        throw new Error("Zero Error");
    else
        throw new Error("Negative Error");
}


/*  This function invokes the above function with various parameters 
 *	and catches the exception if it is thrown.
*/

function testFunction(a){
	try{
		console.log(isPositive(a));
	}catch(e){
		console.log(e.message);
	}
}

//Invoking the test function with various parameters.

testFunction(0);
testFunction(5);
testFunction(-4);
testFunction();
testFunction("Arupam");
testFunction("10");
