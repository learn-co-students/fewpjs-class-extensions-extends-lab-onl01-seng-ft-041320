// Your code here

class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    // get perimeter() {
    //     let sum = 0
    //     for (let side of this.array) {
    //         sum += side
    //     }
    //     return sum
    // }

    get perimeter() {
        return this.array.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue
        })
    }

    // get perimeter() {
    //     let array = this.array
    //     function myFunc(accumulator, currentValue) {
    //         return accumulator + currentValue
    //     }
    //     return array.reduce(myFunc)
    // }

    // get perimeter() {
    //     let array = this.array
    //     let reducer = (accumulator, currentValue) => accumulator + currentValue
    //     return array.reduce(reducer)
    // }

}

//another reduce example:
// [1, 2, 3, 4]
// array.reduce((currentTotal, nextNumberInArray) => currentTotal + nextNumberInArray, 5)

class Triangle extends Polygon {
    get isValid(){
        return ((this.array[0] + this.array[1] > this.array[2]) && (this.array[0] + this.array[2] > this.array[1]) && (this.array[1] + this.array[2] > this.array[0]))
    }
}

class Square extends Polygon {
    get isValid(){
        return (this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3])
    }

    get area(){
        return this.array[0] * this.array[1]
    }
}