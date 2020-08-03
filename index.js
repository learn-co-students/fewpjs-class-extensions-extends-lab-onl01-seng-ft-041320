// Your code here

class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function(side, sum) {
            return sum += side
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length === 3) {
            const side1 = this.sides[0]
            const side2 = this.sides[1]
            const side3 = this.sides[2]
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides.length === 4) {
            const [side1, side2, side3, side4] = this.sides
            if ((side1 === side2 && side2 === side3 && side3 === side4)) {
                return true
            } else {
                return false
            }
        }
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}