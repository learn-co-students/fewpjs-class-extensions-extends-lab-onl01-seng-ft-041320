class Polygon {
  constructor(arrayOfSides) {
    this.arrayOfSides = arrayOfSides
  }

  get countSides() {
    return this.arrayOfSides.length
  }

  get perimeter() {
    return this.arrayOfSides.reduce((memo, side) => memo + side, 0)
  }

}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      let side1 = this.arrayOfSides[0]
      let side2 = this.arrayOfSides[1]
      let side3 = this.arrayOfSides[2]

      return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2))
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      let side1 = this.arrayOfSides[0]
      let side2 = this.arrayOfSides[1]
      let side3 = this.arrayOfSides[2]
      let side4 = this.arrayOfSides[3]


      return ((side1 === side3) && (side2 === side1) && (side3 === side4))
    } else {
      return false
    }
  }

  get area() {
    return this.arrayOfSides[0] * this.arrayOfSides[1]
  }
}
