// Your code here

class Polygon {
    constructor(sides) {
      this.sides = sides
    }
  
    get countSides() {
      return this.sides.length
    }
  
    get perimeter() {
      return this.sides.reduce((accum, current) => accum + current)
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      const indexes = [[0, 1, 2], [1, 2, 0], [0, 2, 1]]
      for (let indexGroup of indexes) {
        if (this.sides[indexGroup[0]] + this.sides[indexGroup[1]] < this.sides[indexGroup[2]]) {
          return false
        }
      }
      return true
    }
  }
  
  class Square extends Polygon {
    get area() {
      return this.sides[0] ** 2
    }
  
    get isValid() {
      const firstSide = this.sides[0]
      return this.sides.every(side => side === firstSide)
    }
  }