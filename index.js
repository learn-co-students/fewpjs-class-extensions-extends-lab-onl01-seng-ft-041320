// Your code here

class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        const initialVal = 0;
        const reducer = (accumulator, item) => {
            return accumulator + item;
        }
        const total = this.array.reduce(reducer, initialVal);
        return total;
    }
}

class Triangle extends Polygon {

    get isValid() {
        if ((this.array[0] + this.array[1]) > this.array[2] && (this.array[1] + this.array[2]) > this.array[0]) { 
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.array[0] === this.array[1] && this.array[2] === this.array[3]) { 
            return true;
        } else {
            return false;
        }
    }

    get area() {
        const side = this.array[0];
        return side ** 2;
    }
}