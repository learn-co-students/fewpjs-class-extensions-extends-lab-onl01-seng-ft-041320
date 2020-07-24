class Polygon {
    constructor(arr) {
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((tot, x) => tot + x);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let arr = this.sides;
        if ((arr[0] + arr[1]) >= arr[2] && (arr[0] + arr[2]) >= arr[1] && (arr[2] + arr[1]) >= arr[0]) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let arr = this.sides;
        if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3]) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[0] ** 2;
    }
}