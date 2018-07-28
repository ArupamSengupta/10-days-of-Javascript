/*
 * This function implements the switch statement. 
 * It takes a string as an input and returns a letter according to the first char of the string.
 * In case of invalid input, it returns the appropiate error message.
 */
'use strict';
function getLetter(s) {
    let letter;
    // Write your code here
	if (s)
		s = s.charAt(0);
	else
		s = "";
	
    switch(s){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = "A";
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = "B";
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = "C";
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = "D";
			break;
		default:
			letter = "No letter for the specified character";
    }
    return letter;
}


//Invoking the function with various parameters to cover all the corner cases.

console.log(getLetter('n'));
console.log(getLetter('c'));
console.log(getLetter());
console.log(getLetter('l'));
console.log(getLetter('u'));