/*
 * This function takes a string as an input and prints the vowels first and then consonants.
 * Print your output using 'console.log()'.
 */
'use strict';
function vowelsAndConsonants(s) {
	
	if (!s){
		s = "";
		console.log("You have not entered anything.");
	}else{
		for (let j=0;j<s.length;j++){
			let letter = s.charAt(j);
			if (isVowel(letter))
				console.log(letter);
		}
		
		for (let j=0;j<s.length;j++){
			let letter = s.charAt(j);
			if (!isVowel(letter))
				console.log(letter);
		}
	}
}

function isVowel(letter){
    return (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u");
}

//Calling the function with various test cases to cover all the corner cases.

vowelsAndConsonants();
console.log();
vowelsAndConsonants('javascriptloops');
console.log();
vowelsAndConsonants('arupamsengupta');
console.log();
vowelsAndConsonants('   ');
console.log();
vowelsAndConsonants('restinpeace');