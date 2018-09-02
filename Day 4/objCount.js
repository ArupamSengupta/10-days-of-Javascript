/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
	
	if(objects){
		if (Array.isArray(objects) && objects.every(isObject) && objects.length !== 0){
			var count = 0;
			for (var i=0;i<objects.length;i++){
				if (objects[i].x === objects[i].y)
					count++;
			}
			return count;
		}else{
			return "Please enter an array of Objects";
		}	
	}else{
		return "Please enter an input";
	}
}

function isObject(arrValue){
	return arrValue !== null && typeof arrValue === "object";
}

//Invoking the function with various inputs to check all the corner cases.
console.log(getCount(["Arupam","Aryak"]));

console.log(getCount("Arupam"));

console.log(getCount([{"x":13,"y":23},{"x":1,"y":1},{"x":2,"y":2}]));

console.log(getCount());

console.log(getCount([]));