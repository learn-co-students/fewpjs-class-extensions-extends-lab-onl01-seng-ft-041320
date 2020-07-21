// Your code here
class Polygon {
  constructor (sidesarray){
    this.sides= sidesarray
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce(function(memo, i){return memo + i})
  }

}

class Triangle extends Polygon {

  get isValid(){
    let a = ((this.sides[0] + this.sides[1]) > this.sides[2])
    let b = ((this.sides[1] + this.sides[2]) > this.sides[0])
    let c = ((this.sides[0] + this.sides[2]) > this.sides[1])
    function isTrue(e) {if (e === true) return true}
    if ([a,b,c].every(isTrue)){
      return true
    }
    else
    {return false}

  }
}

class Square extends Polygon {

  get isValid(){
    if (this.perimeter/4 === this.sides[0])
    {return true}
    else {
    return false}
  }

  get area() {
    return (this.perimeter/4)**2
  }

}
