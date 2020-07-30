
// Define a Polygon class. 
// Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
// Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
// Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.



class Polygon {
    constructor(arrayOfIntegers) {
        this.arrayOfIntegers = arrayOfIntegers
    }

    get countSides() {
        return this.arrayOfIntegers.length
    }

    get perimeter() {
        let i = this.arrayOfIntegers[i]
        for(i = 0; i < this.arrayOfIntegers.length; i++) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            return (this.arrayOfIntegers.reduce(reducer))
        }
    }

}
// Define a Triangle class that inherits from Polygon.
// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.
// The sum of the lengths of any two sides of a triangle is greater than the length of the third side. If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal to) the third side. If that is not true, then it is not possible to construct a triangle with the given side lengths.

class Triangle extends Polygon {

    get isValid () {
        if (this.arrayOfIntegers.length == 3) {
            let a = this.arrayOfIntegers[0]
            let b = this.arrayOfIntegers[1]
            let c = this.arrayOfIntegers[2]
            return((a + b > c) && (a + c > b) && (b + c > a))
            // return true
        } else {
            return false
        }
    }
}
// Define a Square class that inherits from Polygon.
// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
// Use the get keyword to make a getter method area that calculates the area of the square.

class Square extends Polygon {

    get isValid() {
        if (this.arrayOfIntegers.length == 4) {
            let a = this.arrayOfIntegers[0]
            let b = this.arrayOfIntegers[1]
            let c = this.arrayOfIntegers[2]
            let d = this.arrayOfIntegers[3]
            return((a === b) && (b === c) && (c === d))
            // return true
        } else {
            return false
        }

    }

    get area() {
        if (this.isValid) {
            let a = this.arrayOfIntegers[0]
            let b = this.arrayOfIntegers[1]
            return ( a * b )
        }
    }

}
