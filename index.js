
// 1. Define a `Polygon` class.
    // Will accept an `Array` of integers as a parameter for each side of a shape
class Polygon {
    constructor(side) {
        this.side = side
        this.count = this.side.length  
    }
// 2. Use the `get` keyword to make a getter method `countSides`
    // Counts the number of sides (each index in the array)
    get countSides() {
        return this.side.length
    }
// 3. Use the `get` keyword to make a getter method `perimeter`
    // Calculates the sum of each side (each index in the array)
    get perimeter() {
        return this.side.reduce((a, b) => a + b, 0)
    }

}
// 4. Define a `Triangle` class that inherits from `Polygon`
// 5. It will automatically have access to `count` and `perimeter` inherited from `Polygon`
class Triangle extends Polygon {
// 6. Use the `get` keyword to make a getter method `isValid`
    // checks fit eh given 3 sides for a triangle is valid

    /* The sum of the lengths of any two sides of a triangle is greater than the length of the third side. Needs to add 2 sides and the sum must be larger than the 3rd size. */
    get isValid() {
        if (this.count !== 3) return 
        let side1 = this.side[0]
        let side2 = this.side[1]
        let side3 = this.side[2]

        return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2))
    }
}
// 7. Define a `Square` class that inherits from `Polygon`
// 8. It will automatically have access to `count` and `perimeter` inherited from `Polygon`
class Square extends Polygon {
// 9. Use the `get` keyword to make a getter method `isValid`
    // Checks if the given 4 sides for a square is valid.

    // A square is valid when all 4 sides are equal
    get isValid() {
        if(this.count !==4) return
        let side1 = this.side[0]
        let side2 = this.side[1]
        let side3 = this.side[2]
        let side4 = this.side[3]

        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
// 10. Use the `get` keyword to make a getter method `area`
    // calculates the area of the square
    get area() {
        if (this.count !== 4) return 
        return this.side[0] * this.side[0]
    }
}









