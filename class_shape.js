class Shape {
    width = 0;
    length = 0;

    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    perimeter() {
        return (this.width + this.length) * 2;
    }

    area() {
        return this.width * this.length;
    }

    displayInfo() {
        console.log(`Width: ${this.width}, Length: ${this.length}, Perimeter: ${this.perimeter()}, Area: ${this.area()}`);
    }
}

const shape1 = new Shape(5, 10);
const shape2 = new Shape(7, 12);

shape1.displayInfo();
shape2.displayInfo();


