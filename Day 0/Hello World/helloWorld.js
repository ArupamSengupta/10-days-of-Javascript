/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
'use strict';
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
	if (parameterVariable)
		console.log(parameterVariable);
    
}

//Invoking the function with various paramters to check all the corner cases.
greeting("Welcome to 10 days of Javascript!");

greeting();