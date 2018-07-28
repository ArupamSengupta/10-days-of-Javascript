/*
 * This function calculates the grade of a student according to score and returns it.
 * In case of invalid input, it returns the appropiate error message.
 */
'use strict';
function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score<=30)
        grade = "A";
    else if (score > 20 && score<=25)
        grade = "B";
    else if (score > 15 && score<=20)
        grade = "C";
    else if (score > 10 && score<=15)
        grade = "D";
    else if (score > 5 && score<=10)
        grade = "E";
    else if (score > 0 && score<=5)
        grade = "F";
	else
		grade = "Sorry, no grade available for the number that you have entered.";
    return grade;
}

//Invoking the function with various parameters to cover all the corner cases.

console.log(getGrade(28));
console.log(getGrade(-15));
console.log(getGrade(3));
console.log(getGrade(12));
console.log(getGrade(22));
console.log(getGrade(8));
console.log(getGrade(90));
console.log(getGrade());




