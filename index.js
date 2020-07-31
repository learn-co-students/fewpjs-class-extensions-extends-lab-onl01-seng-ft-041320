// Your code here

class Polygon {
    constructor(arr) {
        this.sides = arr
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let reducer = (a, b) => a + b
        return this.sides.reduce( reducer, 0 )
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            return (a+b>c)&&(a+c>b)&&(b+c>a)
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            let d = this.sides[3]
            return (a===b)&&(b===c)&&(c===d)
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0]**2
    }
}