// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
	if (dateString){
		let dateObject = new Date(dateString);
		let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		dayName = dayNames[dateObject.getDay()];
	} else {
		return "Please enter a valid date.";
	}
    
    return dayName;
}


//Invoking the function with various inputs to check all the corner cases.
console.log(getDayName(10/11/2009));

console.log(getDayName(11/10/2010));

console.log(getDayName());