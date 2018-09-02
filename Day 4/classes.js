/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    
    perimeter(){
        var per = 0;
		if (Array.isArray(this.sides) && this.sides.every(this.isNumber)){
			for (var i=0;i<this.sides.length;i++){
				per += this.sides[i];
			} 
			return per;
		}else{
			return "Please enter an array of sides.";
		}
        
    }
	
	isNumber(value){
		return value !== null && typeof value === "number";
	}
}

//Creating various instances of the class with various inputs to check all the corner cases.

const triangle = new Polygon([3,4,5]);
const square = new Polygon([10,10,10,10]);
const invalidShape = new Polygon(["Arupam","Aryak"]);
const emptyShape = new Polygon([]);
const notArray = new Polygon("Arupam");
const noInput = new Polygon();

console.log(triangle.perimeter());
console.log(square.perimeter());
console.log(invalidShape.perimeter());
console.log(emptyShape.perimeter());
console.log(notArray.perimeter());
console.log(noInput.perimeter());