/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
'use strict';
function getSecondLargest(nums) {
    // Complete the function
	if (Array.isArray(nums)){
		nums.sort(function(a, b){return b-a});
		let maxNum = nums[0];
		let secondMaxNum;
		for (let j=1;j<nums.length;j++){
			if (nums[j] !== maxNum){
				secondMaxNum = nums[j];
				break;
			}
		}
    
		return (secondMaxNum === undefined)?maxNum:secondMaxNum;
	}else{
		return "Please enter an array."
	}
    
}

//Invoking the function with various parameters to cover all the edge cases.
console.log(getSecondLargest());
console.log(getSecondLargest([1,2,5,6,7]));
console.log(getSecondLargest([4,4,2,1,7,9]));
console.log(getSecondLargest([3,3,3]));
console.log(getSecondLargest("Arupam"));
console.log(getSecondLargest(["Arupam","Aryak","Anirban","Arnab","Avra"]));