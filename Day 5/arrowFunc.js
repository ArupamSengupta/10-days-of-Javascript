/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
	
	if (Array.isArray(nums)){
		if (onlyNumbers(nums)){
			for (var j=0;j<nums.length;j++){
			if (nums[j]%2 === 0)
				nums[j] *= 2;
			else 
				nums[j] *= 3;
			}
		} else
			return "Please enter an array of numbers";
	} else 
		return "Please enter a valid array";
    
    
    return nums;
}

function onlyNumbers(nums){
	
	for (var index=0;index<nums.length;index++){
		if (isNaN(nums[index])){
			return false;
		}
	}
	
	return true;
}

//Invoking the function with various inputs to check all the corner cases.
console.log(modifyArray([1,3,5,6,9]));

console.log(modifyArray([12,34,5,6,9,13]));

console.log(modifyArray([]));

console.log(modifyArray("Arupam"));

console.log(modifyArray(["Arupam","Romit","Souvik","Pramit"]));

