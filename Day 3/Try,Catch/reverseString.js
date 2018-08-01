/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let rev = s;
	
	if (s){
		try{
			rev = s.split("").reverse().join("");
			console.log(rev);
		}catch(error){
			console.log(error.message);
			console.log(rev);
		}
	}else{
		console.log("You have not entered anything.");
	} 
}

//Invoking the function with various test cases to cover all the corner cases.

reverseString();
reverseString("Arupam");
reverseString("1234");
reverseString("");