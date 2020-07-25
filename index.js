class Polygon {
    constructor(sides) {
        this.sides = sides
    }
 
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function(side, memo){
            return memo += side
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length === 3){
            const side1 = this.sides[0]
            const side2 = this.sides[1]
            const side3 = this.sides[2]
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        }else{
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        function distinct(value, index, self) {
            return self.indexOf(value) === index 
        }
        return (this.sides.length === 4 && this.sides.filter(distinct).length === 1)
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}