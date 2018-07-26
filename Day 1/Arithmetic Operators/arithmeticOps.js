/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
'use strict';
function getArea(length, width) {
    let area;
	
	if (!length && !width){
		return "Please enter both length and width to get the area.";
	}else if (!length || !width){
		return "Either length/width missing.Please enter both length/width to get the area.";
	}else{
		// Write your code here
		area = length * width;
		return "Rectangle's area - " + area;
	}
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
	
	if (!length && !width){
		return "Please enter both length and width to get the perimeter.";
	}else if (!length || !width){
		return "Either length/width missing.Please enter both length/width to get the perimeter.";
	}else{
		// Write your code here
		perimeter = 2*(length + width)
		return "Rectangle's perimeter - " + perimeter;
	}
    
}
//Invoking the functions with various inputs to cover all the corner cases.

console.log("Calling the functions without any parameter -");
console.log("************************************************");

console.log(getArea());
console.log(getPerimeter());

console.log();

console.log("Calling the functions with one parameter -");
console.log("************************************************");
console.log(getArea(7.5));
console.log(getPerimeter(5));

console.log();

console.log("Calling the functions with both parameters -");
console.log("************************************************");
console.log(getArea(4,5));
console.log(getPerimeter(5.7,6.9));

